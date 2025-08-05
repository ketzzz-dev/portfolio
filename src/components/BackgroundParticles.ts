class BackgroundParticles {
    public count: number

    private positionX: number[] = []
    private positionY: number[] = []

    private velocityX: number[] = []
    private velocityY: number[] = []

    private forceX: number[] = []
    private forceY: number[] = []

    private size: number[] = []
    private mass: number[] = []
    private inverseMass: number[] = []

    private mouseX = 0
    private mouseY = 0

    public constructor(particleCount: number, canvasWidth: number, canvasHeight: number) {
        this.count = particleCount

        // Grid size based on total particle count and canvas aspect ratio
        const cols = Math.ceil(Math.sqrt(particleCount * canvasWidth / canvasHeight))
        const rows = Math.ceil(particleCount / cols)

        const cellWidth = canvasWidth / cols
        const cellHeight = canvasHeight / rows

        let index = 0

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (index >= particleCount) break

                // Jitter factor (random offset inside cell)
                const jitterX = (Math.random() - 0.5) * cellWidth * 0.75
                const jitterY = (Math.random() - 0.5) * cellHeight * 0.75

                const positionX = col * cellWidth + cellWidth / 2 + jitterX
                const positionY = row * cellHeight + cellHeight / 2 + jitterY

                let velocityX = (Math.random() - 0.5) * 100
                let velocityY = (Math.random() - 0.5) * 100

                let size = 1 + Math.random() * 4
                let mass = size * size * 50

                this.positionX.push(positionX)
                this.positionY.push(positionY)

                this.velocityX.push(velocityX)
                this.velocityY.push(velocityY)

                this.forceX.push(0)
                this.forceY.push(0)

                this.size.push(size)
                this.mass.push(mass)
                this.inverseMass.push(1 / mass)

                index++
            }
        }
    }

    public update(deltaTime: number, canvas: HTMLCanvasElement) {
        const deltaTimeSq = deltaTime * deltaTime
        const repulsionCoefficient = 100
        const dragCoefficient = 0.05
        const mouseMass = 3000
        const wallMass = 600

        // Apply repulsion force between all pairs
        for (let i = 0; i < this.count; i++) {
            const xi = this.positionX[i]
            const yi = this.positionY[i]

            for (let j = i + 1; j < this.count; j++) {
                const dx = this.positionX[j] - xi
                const dy = this.positionY[j] - yi

                let distSq = dx * dx + dy * dy + 1e-6 // epsilon
                let dist = Math.sqrt(distSq)

                // Force magnitude
                const force = (repulsionCoefficient * this.mass[i] * this.mass[j]) / distSq

                // Normalize direction
                const fx = (dx / dist) * force
                const fy = (dy / dist) * force

                // Apply to both particles (equal and opposite)
                this.forceX[i] -= fx
                this.forceY[i] -= fy

                this.forceX[j] += fx
                this.forceY[j] += fy
            }
        }

        // Mouse repulsion
        for (let i = 0; i < this.count; i++) {
            const dx = this.positionX[i] - this.mouseX
            const dy = this.positionY[i] - this.mouseY

            const distSq = dx * dx + dy * dy + 1e-6
            const dist = Math.sqrt(distSq)

            // Inverse-square repulsion force
            const force = (repulsionCoefficient * mouseMass * this.mass[i]) / distSq

            const fx = (dx / dist) * force
            const fy = (dy / dist) * force

            this.forceX[i] += fx
            this.forceY[i] += fy
        }

        // Wall repulsion
        for (let i = 0; i < this.count; i++) {
            const x = this.positionX[i]
            const y = this.positionY[i]

            const mass = this.mass[i]
            const factor = repulsionCoefficient * wallMass * mass

            const leftDist = x + 1e-6
            const rightDist = canvas.width - x + 1e-6

            const leftForce = factor / (leftDist * leftDist)
            const rightForce = factor / (rightDist * rightDist)

            this.forceX[i] += leftForce - rightForce

            const topDist = y + 1e-6
            const bottomDist = canvas.height - y + 1e-6

            const topForce = factor / (topDist * topDist)
            const bottomForce = factor / (bottomDist * bottomDist)

            this.forceY[i] += topForce - bottomForce
        }

        // Integration
        for (let i = 0; i < this.count; i++) {
            // Drag
            let speed = Math.sqrt(this.velocityX[i] * this.velocityX[i] + this.velocityY[i] * this.velocityY[i]) + 1e-6

            // Calculate drag force magnitude
            const radius = this.size[i]
            const area = Math.PI * radius * radius
            const dragForce = dragCoefficient * speed * speed * area

            // Direction of drag (opposite to velocity)
            const dragX = -this.velocityX[i] / speed * dragForce
            const dragY = -this.velocityY[i] / speed * dragForce

            // Apply drag to total force
            this.forceX[i] += dragX
            this.forceY[i] += dragY

            let accelerationX = this.forceX[i] * this.inverseMass[i]
            let accelerationY = this.forceY[i] * this.inverseMass[i]

            this.forceX[i] = 0
            this.forceY[i] = 0

            this.velocityX[i] += accelerationX * deltaTime
            this.velocityY[i] += accelerationY * deltaTime

            this.positionX[i] += this.velocityX[i] * deltaTime + 0.5 * accelerationX * deltaTimeSq
            this.positionY[i] += this.velocityY[i] * deltaTime + 0.5 * accelerationY * deltaTimeSq
        }

        // Constraints
        for (let i = 0; i < this.count; i++) {
            if (this.positionX[i] - this.size[i] < 0) {
                this.positionX[i] = this.size[i]
                this.velocityX[i] *= -1
            }
            if (this.positionX[i] + this.size[i] > canvas.width) {
                this.positionX[i] = canvas.width - this.size[i]
                this.velocityX[i] *= -1
            }
            if (this.positionY[i] - this.size[i] < 0) {
                this.positionY[i] = this.size[i]
                this.velocityY[i] *= -1
            }
            if (this.positionY[i] + this.size[i] > canvas.height) {
                this.positionY[i] = canvas.height - this.size[i]
                this.velocityY[i] *= -1
            }
        }
    }

    public draw(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        const tau = Math.PI * 2
        const linkDistanceSq = 160 * 160

        context.clearRect(0, 0, canvas.width, canvas.height)
        context.save()

        for (let i = 0; i < this.count; i++) {
            const xi = this.positionX[i];
            const yi = this.positionY[i];

            // link particles that are nearby
            for (let j = i + 1; j < this.count; j++) {
                const dx = this.positionX[j] - xi;
                const dy = this.positionY[j] - yi;

                const distSq = dx * dx + dy * dy;

                if (distSq < linkDistanceSq) {
                    const alpha = 1 - distSq / linkDistanceSq

                    context.strokeStyle = `rgba(243, 139, 168, ${alpha})`

                    context.beginPath()
                    context.moveTo(xi, yi)
                    context.lineTo(this.positionX[j], this.positionY[j])
                    context.stroke()
                    context.closePath()
                }
            }
        }

        context.fillStyle = 'rgb(243, 139, 168)'

        for (let i = 0; i < this.count; i++) {
            context.beginPath()
            context.arc(this.positionX[i], this.positionY[i], this.size[i], 0, tau)
            context.closePath()
            context.fill()
        }

        context.restore()
    }

    public setMousePosition(x: number, y: number): void {
        this.mouseX = x
        this.mouseY = y
    }
}

export default BackgroundParticles