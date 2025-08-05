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
    const maxDeltaTime = 1 / 20

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
        let deltaTime = now - lastTime

        if (deltaTime > maxDeltaTime) deltaTime = maxDeltaTime

        lastTime = now
        accumulatedTime += deltaTime

        while (accumulatedTime > fixedDeltaTime) {
            particles.update(fixedDeltaTime, canvas)

            accumulatedTime -= fixedDeltaTime
        }

        particles.draw(canvas, context)

        animationFrameId = requestAnimationFrame(animate)
    }

    const onResize = () => {
        if (!canvas) return

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
    }

    const onMouseMove = (event: MouseEvent) => {
        if (!canvas || particles.count < 1) return

        // Get mouse position relative to canvas
        const rect = canvas.getBoundingClientRect()

        particles.setMousePosition(
            event.clientX - rect.left,
            event.clientY - rect.top
        ) 
    }

    const onTouchMove = (event: TouchEvent) => {
        if (!canvas || particles.count < 1) return

        // Get mouse position relative to canvas
        const rect = canvas.getBoundingClientRect()

        for (const touch of event.touches) {
            particles.setMousePosition(
                touch.clientX - rect.left,
                touch.clientY - rect.top
            )   
        }
    }

    onMount(() => {
        init()
        animate()

        window.addEventListener('resize', onResize)
        window.addEventListener('mousemove', onMouseMove)
        window.addEventListener('touchmove', onTouchMove)
    })

    onCleanup(() => {
        cancelAnimationFrame(animationFrameId)

        window.removeEventListener('resize', onResize)
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('touchmove', onTouchMove)
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