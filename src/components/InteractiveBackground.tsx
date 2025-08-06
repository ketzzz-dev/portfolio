import { onMount, onCleanup } from 'solid-js'
import BackgroundParticles from './BackgroundParticles'
import { debounce, throttle } from '../utils/timing'

const InteractiveBackground = () => {
    let canvas!: HTMLCanvasElement
    let particles!: BackgroundParticles
    let lastTime: number
    let animationFrameId: number

    let accumulatedTime = 0
    
    const particleCount = window.innerWidth < 768 ? 75 : 200
    const fixedDeltaTime = 1 / 60
    const maxDeltaTime = 1 / 12

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

        const alpha = accumulatedTime / fixedDeltaTime

        particles.draw(canvas, context, alpha)

        animationFrameId = requestAnimationFrame(animate)
    }

    const onResize = debounce(() => {
        if (!canvas) return

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
    }, 200)

    const onMouseMove = throttle((event: MouseEvent) => {
        if (!canvas || particles.count < 1) return

        // Get mouse position relative to canvas
        const rect = canvas.getBoundingClientRect()

        particles.setCursorPosition(
            event.clientX - rect.left,
            event.clientY - rect.top
        ) 
    }, 1000 / 60)

    const onTouchMove = throttle((event: TouchEvent) => {
        if (!canvas || particles.count < 1) return

        // Get touch position relative to canvas
        const rect = canvas.getBoundingClientRect()

        for (const touch of event.touches) {
            particles.setCursorPosition(
                touch.clientX - rect.left,
                touch.clientY - rect.top
            )   
        }
    }, 1000 / 50)

    onMount(() => {
        init()
        animate()

        window.addEventListener('resize', onResize)
        window.addEventListener('mousemove', onMouseMove)
        window.addEventListener('touchmove', onTouchMove)

        onResize()
    })

    onCleanup(() => {
        cancelAnimationFrame(animationFrameId)

        window.removeEventListener('resize', onResize)
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('touchmove', onTouchMove)
    })

    return <canvas ref={canvas} class='interactive-background' aria-hidden />
}

export default InteractiveBackground