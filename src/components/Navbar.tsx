import { A } from "@solidjs/router"
import type { Component } from "solid-js"
import "./Navbar.css"

const Navbar: Component = () => <>
    <nav>
        <A href="/" class="page" end>Home</A>      
        <A href="/projects" class="page">Projects</A>
    </nav>
</>

export default Navbar