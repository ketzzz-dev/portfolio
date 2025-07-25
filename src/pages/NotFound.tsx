import { onCleanup, onMount } from "solid-js"
import { useNavigate } from "@solidjs/router"
import AButton from "../components/AButton"
import { useSetPageTitle } from "../hooks/usePageTitle"
// import "./NotFound.css"

export default function NotFound() {
    const navigate = useNavigate()

    let timeout: number

    useSetPageTitle("404")

    onMount(() => {
        timeout = setTimeout(() => {
            navigate("/")
        }, 5000)
    })
    onCleanup(() => {
        clearTimeout(timeout)
    })

    return <>
        <section class="not-found">
            <h2>404 - Page not found</h2>
            <h3>Well... this wasn't the page you were looking for.</h3>

            <p>Sending you back home before things get weird. Press the button if nothing happens.</p>

            <AButton href="/">Go back</AButton>
        </section>
    </>
}