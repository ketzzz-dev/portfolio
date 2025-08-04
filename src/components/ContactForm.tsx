import { createSignal, type Component } from 'solid-js'
import type { JSX } from 'solid-js/jsx-runtime'

const ContactForm: Component = () => {
    const [formData, setFormData] = createSignal({
        name: '',
        email: '',
        message: ''
    })
    const [formStatus, setFormStatus] = createSignal<{
        state: 'idle' | 'submitting' | 'success' | 'error'
        message?: string
    }>({ state: 'idle' })

    const handleInput: JSX.EventHandler<HTMLInputElement | HTMLTextAreaElement, InputEvent> = (e) => {
        const { name, value } = e.currentTarget
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: Event) => {
        e.preventDefault()
        setFormStatus({ state: 'submitting' })

        try {
            // Replace with your actual endpoint
            const response = await fetch('https://api.yourdomain.com/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData())
            })

            if (!response.ok) throw new Error('Submission failed')

            setFormStatus({
                state: 'success',
                message: 'Message sent successfully!'
            })
            setFormData({ name: '', email: '', message: '' })
        } catch (error) {
            setFormStatus({
                state: 'error',
                message: 'Failed to send message. Please try again later.'
            })
        }
    }

    return <form onSubmit={handleSubmit} class="contact-form">
        <div class="form-group">
            <label for="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData().name}
                onInput={handleInput}
                required
                disabled={formStatus().state === 'submitting'}
            />
        </div>

        <div class="form-group">
            <label for="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData().email}
                onInput={handleInput}
                required
                disabled={formStatus().state === 'submitting'}
            />
        </div>

        <div class="form-group">
            <label for="message">Message</label>
            <textarea
                id="message"
                name="message"
                rows={5}
                value={formData().message}
                onInput={handleInput}
                required
                disabled={formStatus().state === 'submitting'}
            />
        </div>

        <button
            type="submit"
            class="button"
            disabled={formStatus().state === 'submitting'}
        >
            {formStatus().state === 'submitting' ? (
                'Sending...'
            ) : (
                'Send Message'
            )}
        </button>

        {formStatus().state === 'success' && (
            <div class="alert success">
                {formStatus().message}
            </div>
        )}

        {formStatus().state === 'error' && (
            <div class="alert error">
                {formStatus().message}
            </div>
        )}
    </form>
}

export default ContactForm