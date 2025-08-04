import { onMount, onCleanup } from 'solid-js'
import BackgroundParticles from './BackgroundParticles'

const InteractiveBackground = () => {
    let canvas!: HTMLCanvasElement
    let particles!: BackgroundParticles
    let lastTime: number
    let animationFrameId: number

    let accumulatedTime = 0
    
    const particleCount = window.innerWidth < 768 ? 50 : 200
    const fixedDeltaTime = 1 / 60

    const init = () => {
        if (!canvas) return

        const context = canvas.getContext('2d')

        if (!context) return

        lastTime = performance.now() * .001

        // Set canvas to full window size
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        // Create particles
        particles = new BackgroundParticles(particleCount, canvas.width, canvas.height)
    }

    const animate = () => {
        if (!canvas) return

        const context = canvas.getContext('2d')

        if (!context) return

        const now = performance.now() * .001
        const deltaTime = now - lastTime

        lastTime = now
        accumulatedTime += deltaTime

        while (accumulatedTime > fixedDeltaTime) {
            particles.update(fixedDeltaTime, canvas)

            accumulatedTime -= fixedDeltaTime
        }

        particles.draw(canvas, context)

        animationFrameId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
        if (!canvas) return

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        
    }

    const handleMouseMove = (event: MouseEvent) => {
        if (!canvas || particles.count < 1) return

        // Get mouse position relative to canvas
        const rect = canvas.getBoundingClientRect()

        particles.mouseX = event.clientX - rect.left
        particles.mouseY = event.clientY - rect.top
    }

    const handleTouchMove = (event: TouchEvent) => {
        if (!canvas || particles.count < 1) return

        // Get mouse position relative to canvas
        const rect = canvas.getBoundingClientRect()

        for (const touch of event.touches) {
            particles.mouseX = touch.clientX - rect.left
            particles.mouseY = touch.clientY - rect.top
        }
    }

    onMount(() => {
        init()
        animate()

        window.addEventListener('resize', handleResize)
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('touchmove', handleTouchMove)
    })

    onCleanup(() => {
        cancelAnimationFrame(animationFrameId)

        window.removeEventListener('resize', handleResize)
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('touchmove', handleTouchMove)
    })

    return (
        <canvas
            ref={canvas}
            class="interactive-background"
            aria-hidden="true"
        />
    )
}

export default InteractiveBackground