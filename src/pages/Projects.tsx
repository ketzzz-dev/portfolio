import { onMount, type Component } from "solid-js"
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: ""
    },
    {
        title: "Lorem",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: ""
    }
]

const Projects: Component = () => {
    onMount(() => {
        document.title = "Ketzzz • Projects"
    })

    return <>
        <section>
            <h2>Projects</h2>

            <div class="projects">
                {projects.map(project => <ProjectCard project={project} />)}
            </div>
        </section>
    </>
}

export default Projects