export function throttle<T extends (...args: any[]) => void>(fn: T, limit = 1000 / 60): T {
    let lastCall = 0

    return ((...args: any[]) => {
        const now = Date.now()

        if (now - lastCall >= limit) {
            lastCall = now
            
            fn(...args)
        }
    }) as T
}

export function debounce<T extends (...args: any[]) => void>(fn: T, delay = 200): T {
    let timer: ReturnType<typeof setTimeout>

    return ((...args: any[]) => {
        clearTimeout(timer)

        timer = setTimeout(() => fn(...args), delay)
    }) as T
}