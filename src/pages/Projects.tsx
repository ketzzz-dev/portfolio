import { onMount } from "solid-js"
import Navbar from "../components/Navbar"
import ProjectCard, { type Project } from "../components/ProjectCard"
import "./Projects.css"

const projects: Project[] = [
    {
        title: "Fizix",
        description: "A simple yet powerful 3D physics engine built from scratch using Position-Based Dynamics (PBD).",
        link: "https://github.com/ketzzz-dev/fizix"
    },
    {
        title: "Lorem",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        title: "Lorem",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]

export default function Projects() {
    onMount(() => {
        document.title = "Ketzzz - Projects"
    })

    return <>
        <Navbar />
        
        <main>
            <section>
                <h2>Projects</h2>
                {projects.map(project => <ProjectCard project={project} />)}
            </section>
        </ main>
    </>
}