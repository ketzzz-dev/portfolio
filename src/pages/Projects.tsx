import type { Component } from 'solid-js'
import ProjectCard from '../components/ProjectCard'
import { allProjects } from '../data/projects'
import { Title } from '@solidjs/meta'

const Projects: Component = () => <>
    <Title>Projects | Ketzzz</Title>

    <section>
        <h2>Projects</h2>

        <div class='projects'>
            {allProjects.map(project => <ProjectCard project={project} />)}
        </div>
    </section>
</>

export default Projects