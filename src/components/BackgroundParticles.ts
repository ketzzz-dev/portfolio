class BackgroundParticles {
    public count: number

    // Position
    private px: number[] = []
    private py: number[] = []

    // Old position
    private qx: number[] = []
    private qy: number[] = []

    // Velocity
    private vx: number[] = []
    private vy: number[] = []

    // Force
    private fx: number[] = []
    private fy: number[] = []

    private r: number[] = [] // Radius
    private m: number[] = [] // Mass
    private w: number[] = [] // Inverse mass

    // Cursor position
    private cx = 0
    private cy = 0

    public constructor(particleCount: number, canvasWidth: number, canvasHeight: number) {
        this.count = particleCount

        // Grid size based on total particle count and canvas aspect ratio
        const cols = Math.ceil(Math.sqrt(particleCount * canvasWidth / canvasHeight))
        const rows = Math.ceil(particleCount / cols)

        const cellWidth = canvasWidth / cols
        const cellHeight = canvasHeight / rows

        let i = 0

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (i >= this.count) break

                // Jitter factor (random offset inside cell)
                const jx = (Math.random() - 0.5) * cellWidth * 0.75
                const jy = (Math.random() - 0.5) * cellHeight * 0.75

                const px = col * cellWidth + cellWidth / 2 + jx
                const py = row * cellHeight + cellHeight / 2 + jy

                let vx = (Math.random() - 0.5) * 100
                let vy = (Math.random() - 0.5) * 100

                let r = 1 + Math.random() * 4
                let m = r * r * 75 // Arbitrary size to mass ratio

                this.px.push(px)
                this.py.push(py)

                this.qx.push(px)
                this.qy.push(py)

                this.vx.push(vx)
                this.vy.push(vy)

                this.fx.push(0)
                this.fy.push(0)

                this.r.push(r)
                this.m.push(m)
                this.w.push(1 / m)

                i++
            }
        }
    }

    public update(deltaTime: number, canvas: HTMLCanvasElement) {
        const repulsionCoefficient = 100
        const dragCoefficient = 0.05
        const cursorMass = 3000
        const wallMass = 600

        // Apply repulsion force between all pairs
        for (let i = 0; i < this.count; i++) {
            const xi = this.px[i]
            const yi = this.py[i]

            for (let j = i + 1; j < this.count; j++) {
                const dx = this.px[j] - xi
                const dy = this.py[j] - yi

                const distSq = dx * dx + dy * dy + 1e-6
                const dist = Math.sqrt(distSq)
                const inverseDist = 1 / dist

                // Force magnitude
                const force = (repulsionCoefficient * this.m[i] * this.m[j]) / distSq

                // Normalize direction
                const fx = dx * inverseDist * force
                const fy = dy * inverseDist * force

                // Apply to both particles
                this.fx[i] -= fx
                this.fy[i] -= fy

                this.fx[j] += fx
                this.fy[j] += fy
            }
        }

        // Cursor repulsion
        for (let i = 0; i < this.count; i++) {
            const dx = this.px[i] - this.cx
            const dy = this.py[i] - this.cy

            const distSq = dx * dx + dy * dy + 1e-6
            const dist = Math.sqrt(distSq)
            const inverseDist = 1 / dist

            // Inverse-square repulsion force
            const force = (repulsionCoefficient * cursorMass * this.m[i]) / distSq

            const fx = dx * inverseDist * force
            const fy = dy * inverseDist * force

            this.fx[i] += fx
            this.fy[i] += fy    
        }

        // Wall repulsion
        for (let i = 0; i < this.count; i++) {
            const px = this.px[i]
            const py = this.py[i]

            const mass = this.m[i]
            const factor = repulsionCoefficient * wallMass * mass
            const rightDist = canvas.width - px

            const leftForce = factor / (px * px + 1e-6)
            const rightForce = factor / (rightDist * rightDist + 1e-6)

            this.fx[i] += leftForce - rightForce

            const bottomDist = canvas.height - py
            const topForce = factor / (py * py + 1e-6)
            const bottomForce = factor / (bottomDist * bottomDist + 1e-6)

            this.fy[i] += topForce - bottomForce
        }

        // Integration
        for (let i = 0; i < this.count; i++) {
            // Drag
            let speedSq = this.vx[i] * this.vx[i] + this.vy[i] * this.vy[i]

            // Calculate drag force magnitude
            const r = this.r[i]
            const area = Math.PI * r * r
            const dragForce = dragCoefficient * speedSq * area

            // Direction of drag (opposite to velocity)
            const speed = Math.sqrt(speedSq) + 1e-6
            const inverseSpeed = 1 / speed

            const dx = this.vx[i] * inverseSpeed
            const dy = this.vy[i] * inverseSpeed

            // Apply drag to total force
            this.fx[i] -= dx * dragForce
            this.fy[i] -= dy * dragForce

            // Acceleration
            let ax = this.fx[i] * this.w[i]
            let ay = this.fy[i] * this.w[i]

            // Save old position
            this.qx[i] = this.px[i]
            this.qy[i] = this.py[i]

            this.fx[i] = 0
            this.fy[i] = 0

            this.vx[i] += ax * deltaTime
            this.vy[i] += ay * deltaTime

            this.px[i] += this.vx[i] * deltaTime
            this.py[i] += this.vy[i] * deltaTime
        }

        // Wall Constraints
        for (let i = 0; i < this.count; i++) {
            this.px[i] = Math.max(this.r[i], Math.min(canvas.width - this.r[i], this.px[i]))
            this.py[i] = Math.max(this.r[i], Math.min(canvas.height - this.r[i], this.py[i]))
        }

        // Update Velocity
        const inverseDeltaTime = 1 / deltaTime

        for (let i = 0; i < this.count; i++) {
            this.vx[i] = (this.px[i] - this.qx[i]) * inverseDeltaTime
            this.vy[i] = (this.py[i] - this.qy[i]) * inverseDeltaTime
        }
    }

    public draw(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, alpha: number) {
        const tau = Math.PI * 2
        const linkDistanceSq = 160 * 160

        // Interpolated positions
        const ix = [...this.qx]
        const iy = [...this.qy]

        for (let i = 0; i < this.count; i++) {
            ix[i] += (this.px[i] - this.qx[i]) * alpha
            iy[i] += (this.py[i] - this.qy[i]) * alpha
        }

        context.clearRect(0, 0, canvas.width, canvas.height)
        context.save()

        // Links
        for (let i = 0; i < this.count; i++) {
            const xi = ix[i];
            const yi = iy[i];
            
            // link particles that are nearby
            for (let j = i + 1; j < this.count; j++) {
                const dx = ix[j] - xi;
                const dy = iy[j] - yi;
                
                const distSq = dx * dx + dy * dy;
                
                if (distSq < linkDistanceSq) {
                    const norm = 1 - distSq / linkDistanceSq
                    
                    context.lineWidth = norm
                    context.strokeStyle = `rgba(243, 139, 168, ${norm})`
                    
                    context.beginPath()
                    context.moveTo(xi, yi)
                    context.lineTo(ix[j], iy[j])
                    context.closePath()
                    context.stroke()
                }
            }
        }
        
        context.fillStyle = 'rgb(243, 139, 168)'

        for (let i = 0; i < this.count; i++) {
            context.beginPath()
            context.arc(ix[i], iy[i], this.r[i], 0, tau)
            context.closePath()
            context.fill()
        }

        context.restore()
    }

    public setCursorPosition(x: number, y: number): void {
        this.cx = x
        this.cy = y
    }
}

export default BackgroundParticles