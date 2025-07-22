import { A } from "@solidjs/router"
import "./Navbar.css"

export default function Navbar() {
    return <nav>
        <A href="/" class="page" end>Home</A>      
        <A href="/projects" class="page">Projects</A>
    </nav>
}