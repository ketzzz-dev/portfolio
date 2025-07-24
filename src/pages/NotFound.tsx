import { onCleanup, onMount } from "solid-js"
import { useNavigate } from "@solidjs/router"
import Navbar from "../components/Navbar"
import AButton from "../components/AButton"
import "./NotFound.css"

export default function NotFound() {
    const navigate = useNavigate()

    let timeout: number

    onMount(() => {
        document.title = "Ketzzz • 404"

        timeout = setTimeout(() => {
            navigate("/")
        }, 5000)
    })
    onCleanup(() => {
        clearTimeout(timeout)
    })

    return <>
        <section class="not-found">
            <h2>404 - Page not found</h2    >
            <h3>Well... this wasn't the page you were looking for.</h3>

            <p>Sending you back home before things get weird. Press the button if nothing happens.</p>

            <AButton href="/">Go back</AButton>
        </section>
    </>
}