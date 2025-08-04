import { K, MOUSE_MASS, F, LINK_DISTANCE_SQ, WALL_MASS } from '../data/constants'

class BackgroundParticles {
    public count: number

    public positionX: number[] = []
    public positionY: number[] = []

    public velocityX: number[] = []
    public velocityY: number[] = []

    public forceX: number[] = []
    public forceY: number[] = []

    public size: number[] = []
    public mass: number[] = []
    public inverseMass: number[] = []

    public mouseX = 0
    public mouseY = 0

    public constructor(particleCount: number, canvasWidth: number, canvasHeight: number) {
        this.count = particleCount

        for (let i = 0; i < particleCount; i++) {
            let positionX = Math.random() * canvasWidth // [0, width]
            let positionY = Math.random() * canvasHeight // [0, height]

            let velocityX = (Math.random() - 0.5) * 100 // [-50, 50]
            let velocityY = (Math.random() - 0.5) * 100 // [-50, 50]

            let size = 1 + Math.random() * 4 // [1, 5]
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
        }
    }

    public update(deltaTime: number, canvas: HTMLCanvasElement) {
        const deltaTimeSquared = deltaTime * deltaTime

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
                const force = (K * this.mass[i] * this.mass[j]) / distSq

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
            const force = (K * MOUSE_MASS * this.mass[i]) / distSq

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
            const factor = (K * WALL_MASS * mass)

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
            let speed = Math.sqrt(this.velocityX[i] * this.velocityX[i] + this.velocityY[i] * this.velocityY[i])

            if (speed > 1e-6) {
                // Calculate drag force magnitude
                const radius = this.size[i]
                const area = Math.PI * radius * radius
                const dragForce = F * speed * speed * area

                // Direction of drag (opposite to velocity)
                const dragX = -this.velocityX[i] / speed * dragForce
                const dragY = -this.velocityY[i] / speed * dragForce

                // Apply drag to total force
                this.forceX[i] += dragX
                this.forceY[i] += dragY
            }

            let accelerationX = this.forceX[i] * this.inverseMass[i]
            let accelerationY = this.forceY[i] * this.inverseMass[i]

            this.forceX[i] = 0
            this.forceY[i] = 0

            this.velocityX[i] += accelerationX * deltaTime
            this.velocityY[i] += accelerationY * deltaTime

            this.positionX[i] += this.velocityX[i] * deltaTime + 0.5 * accelerationX * deltaTimeSquared
            this.positionY[i] += this.velocityY[i] * deltaTime + 0.5 * accelerationY * deltaTimeSquared
        }

        // Constraints
        for (let i = 0; i < this.count; i++) {
            if (this.positionX[i] - this.size[i] < 0) {
                this.positionX[i] = this.size[i]
            }
            if (this.positionX[i] + this.size[i] > canvas.width) {
                this.positionX[i] = canvas.width - this.size[i]
            }
            if (this.positionY[i] - this.size[i] < 0) {
                this.positionY[i] = this.size[i]
            }
            if (this.positionY[i] + this.size[i] > canvas.height) {
                this.positionY[i] = canvas.height - this.size[i]
            }
        }
    }

    public draw(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        const tau = Math.PI * 2

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

                if (distSq < LINK_DISTANCE_SQ) {
                    const alpha = 1 - distSq / LINK_DISTANCE_SQ

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
}

export default BackgroundParticles