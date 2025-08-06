import { onCleanup, onMount } from "solid-js"
import { useNavigate } from "@solidjs/router"
import LinkButton from "../components/LinkButton"
import idkImage from '../assets/images/idk.png'
import { Title } from "@solidjs/meta"

export default function NotFound() {
    const navigate = useNavigate()

    let timeout: number

    onMount(() => {
        timeout = setTimeout(() => {
            navigate('/')
        }, 5000)
    })
    onCleanup(() => {
        if (timeout) clearTimeout(timeout)
    })

    return <>
        <Title>Oops | Ketzzz</Title>

        <section class='not-found'>
            <h2>404 - Page not found</h2>
            <h3>Well... this wasn't the page you were looking for.</h3>

            <img src={idkImage} alt="404" />

            <p>Sending you back home before things get weird. Press the button if nothing happens.</p>
            <LinkButton href="/">Go back</LinkButton>
        </section>
    </>
}