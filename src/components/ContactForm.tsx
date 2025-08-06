import { createSignal, type Component } from 'solid-js'
import type { ContactFormStatus } from '../types/component'
import type { JSX } from 'solid-js/jsx-runtime'

const ContactForm: Component = () => {
    const [name, setName] = createSignal('')
    const [email, setEmail] = createSignal('')
    const [message, setMessage] = createSignal('')
    const [status, setStatus] = createSignal<ContactFormStatus>('idle')

    const onSubmit: JSX.EventHandler<HTMLFormElement, Event> = async (e) => {
        e.preventDefault()
        setStatus('sending')

        try {
            // TODO: implement sending api
        } catch (err) {
            console.error(err)
            setStatus('error')
        }
    }

    return <form
        onSubmit={onSubmit}
        class='contact-form'
    >
        <div class='input-grid'>
            <input
                type='text'
                id='name'
                class='input'
                value={name()}
                onInput={e => setName(e.currentTarget.value)}
                placeholder='Your Name'
                autocomplete='name'
                required
            />
            <input
                type='email'
                id='email'
                class='input'
                value={email()}
                onInput={e => setEmail(e.currentTarget.value)}
                placeholder='Your Email'
                autocomplete='email'
                required
            />
            <textarea
                id='message'
                class='input'
                value={message()}
                onInput={e => setMessage(e.currentTarget.value)}
                placeholder="What's on your mind?"
                rows='5'
                required
            />
        </div>

        <button type='submit' class='button' disabled={status() === 'sending'}>
            {status() === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
    </form>
}

export default ContactForm