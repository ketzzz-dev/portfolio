import Navbar from "../components/Navbar"
import AButton from "../components/AButton"
import { onCleanup, onMount } from "solid-js"
import { useNavigate } from "@solidjs/router"

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
        <Navbar />

        <main>
            <h1>404</h1>

            <p>Well... this isn't the page you were looking for.</p>
            <p>Redirecting you home before things get weird. Press the button if nothing happens.</p>

            <AButton href="/">Go back</AButton>
        </main>
    </>
}