import './App.css'

function App() {
    return <>
        <header>
            <h1>Keys (Lucas)</h1>
            <p>Game Developer</p>
        </header>

        <nav>
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
        </nav>

        <section id="about" class="about">
            <div class="container">
                <h2>About Me</h2>
                <p>Hey! I'm a CS student getting into game dev and systems programming. I like building stuff from the ground up and messing around with gameplay ideas.

                    Right now, I’m exploring game design and low-level graphics. I also dabble in music composition and a bit of 3D modeling on the side.</p>
            </div>
        </section>

        <section id="portfolio" class="portfolio">
            <div class="container">
                <h2>My Work</h2>
                <div class="projects">
                    <div class="project">
                        <img src="https://placehold.co/300x200" alt="Project 1"/>
                        <h3>Project 1</h3>
                        <p>A brief description of the project goes here.</p>
                    </div>
                    <div class="project">
                        <img src="https://placehold.co/300x200" alt="Project 2"/>
                        <h3>Project 2</h3>
                        <p>A brief description of the project goes here.</p>
                    </div>
                    <div class="project">
                        <img src="https://placehold.co/300x200" alt="Project 3"/>
                        <h3>Project 3</h3>
                        <p>A brief description of the project goes here.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" class="contact">
            <div class="container">
                <h2>Contact Me</h2>
                <form action="#" method="post">
                    <input type="text" name="name" placeholder="Your Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>

        <footer>
            <p>&copy; 2025 Your Name | All rights reserved</p>
        </footer>
    </>
}

export default App
