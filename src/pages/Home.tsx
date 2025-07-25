import ProjectCard, { type Project } from "../components/ProjectCard"
import SkillsSection from "../components/SkillsSection"
import { type Skill } from "../components/SkillBadge"
import AButton from "../components/AButton"
import githubIcon from "../assets/github.svg"
import unityIcon from "../assets/icons/unity.svg"
import csIcon from "../assets/icons/cs.svg"
import godotIcon from "../assets/icons/godot.svg"
import bevyIcon from "../assets/icons/bevy.svg"
import rustIcon from "../assets/icons/rust.svg"
import cIcon from "../assets/icons/c.svg"
import cppIcon from "../assets/icons/cpp.svg"
import jsIcon from "../assets/icons/js.svg"
import tsIcon from "../assets/icons/ts.svg"
import nodeIcon from "../assets/icons/node.svg"
import solidIcon from "../assets/icons/solid.svg"
import viteIcon from "../assets/icons/vite.svg"
import htmlIcon from "../assets/icons/html.svg"
import cssIcon from "../assets/icons/css.svg"
import gitIcon from "../assets/icons/git.svg"
import "./Home.css"
import { type Component } from "solid-js"
import { useSetPageTitle } from "../hooks/usePageTitle"

const languages: Skill[] = [
    { name: "GDScript", icon: godotIcon },
    { name: "C#", icon: csIcon },
    { name: "Rust", icon: rustIcon },
    { name: "C", icon: cIcon },
    { name: "C++", icon: cppIcon },
    { name: "TypeScript", icon: tsIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon }
]
const engines: Skill[] = [
    { name: "Godot", icon: godotIcon },
    { name: "Unity", icon: unityIcon },
    { name: "Bevy", icon: bevyIcon }
]
const tools: Skill[] = [
    { name: "Node.js", icon: nodeIcon },
    { name: "Solid.js", icon: solidIcon },
    { name: "Vite", icon: viteIcon },
    { name: "Git", icon: gitIcon }
]

const featuredProjects: Project[] = [
    {
        title: "Fizix",
        description: "A simple yet powerful 3D physics engine built from scratch using Position-Based Dynamics (PBD).",
        link: "https://github.com/ketzzz-dev/fizix"
    },
    {
        title: "Lorem",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: ""
    }
]

const Home: Component = () => {
    useSetPageTitle()

    return <>
        <section class="hero">
            <h1>Hey, I'm Lucas!</h1>

            <p>
                {"\t"}I'm also known online as <strong>Ketzzz</strong>,
                and I'm an 18-year-old Computer Science student with over 5 years of programming experience and a strong passion for game development.
            </p>
            <p>
                {"\t"}I primarily work with <strong>Godot</strong> and <strong>Unity</strong>,
                and I'm currently diving into the <strong>Rust</strong> ecosystem with the <strong>Bevy</strong> game engine.
                On the side, I occasionally explore <strong>music production</strong> and <strong>3D modeling</strong>,
                mixing tech with creativity wherever I can.
            </p>
            <p>
                {"\t"}This site is my personal hub and a place to share my projects, ideas, and experiments.
                Take a look around, and feel free to reach out if you're curious, interested, or just want to talk shop!
            </p>

            <div class="links">
                <AButton icon={githubIcon} target="_blank" href="https://github.com/ketzzz-dev">Visit my GitHub</AButton>
                <AButton href="/projects">Check out my Projects</AButton>
            </div>
        </section>

        <section class="featured-projects">
            <h2>Featured Projects</h2>

            <div class="projects-container">
                {featuredProjects.map((project) => <ProjectCard project={project} />)}
            </div>
        </section>

        <section class="technical-skills">
            <h2>Technical Skills</h2>

            <div class="skills-container">
                <SkillsSection title="Languages" skills={languages} />
                <SkillsSection title="Engines" skills={engines} />
                <SkillsSection title="Tools" skills={tools} />
            </div>
        </section>

        <section class="contact">
            <h2>Contact Me</h2>
            <p>
                Got questions, want to collaborate, or just feel like chatting? I'm always open to talk.
            </p>

            <div class="contact-links">

            </div>
        </section>
    </>
}

export default Home