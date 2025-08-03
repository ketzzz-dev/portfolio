import { A } from '@solidjs/router'
import type { Component } from 'solid-js'

const Header: Component = () => <header>
    <nav class='navbar'>
        <A href='/' class='page' end>Home</A>      
        <A href='/projects' class='page'>Projects</A>
    </nav>
</header>

export default Header