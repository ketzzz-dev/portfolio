import { A } from "@solidjs/router"
import type { Component } from "solid-js"

const Navbar: Component = () => <>
    <nav class="navbar">
        <A href="/" class="page" end>Home</A>      
        <A href="/projects" class="page">Projects</A>
    </nav>
</>

export default Navbar