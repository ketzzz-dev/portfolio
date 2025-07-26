import type { Component } from "solid-js"
import githubIcon from "../assets/icons/github.svg"
import discordIcon from "../assets/icons/discord.svg"

const Footer: Component = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer class="footer">
        <div class="social-links">
            <a href="https://github.com/ketzzz-dev" target="_blank" rel="noopener">
                <img src={githubIcon} alt="GitHub" class="social-icon" />
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener">
                <img src={discordIcon} alt="Discord" class="social-icon" />
            </a>
        </div>
        
        <p class="copyright">
            &copy; {currentYear} Ketzzz. All rights reserved.
        </p>
        
        <p class="built-with">
            Built with <strong>Solid.js</strong> and <strong>Vite</strong>
        </p>
    </footer>
  )
}

export default Footer