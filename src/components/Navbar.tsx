import { A } from "@solidjs/router"
import "./Navbar.css"

export default function Navbar() {
    return <nav>
        <div class="navbar-container">
            <A href="/" class="page" end>Home</A>      
            <A href="/projects" class="page">Projects</A>
        </div>
    </nav>
}