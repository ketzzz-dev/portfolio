import type { Component } from "solid-js"
import ProjectCard from "../components/ProjectCard"
import { useSetPageTitle } from "../hooks/usePageTitle"
import { allProjects } from "../data/projects"
// import "./Projects.css"

const Projects: Component = () => {
    useSetPageTitle("Projects")

    return <>
        <section>
            <h2>Projects</h2>

            <div class="projects">
                {allProjects.map(project => <ProjectCard project={project} />)}
            </div>
        </section>
    </>
}

export default Projects