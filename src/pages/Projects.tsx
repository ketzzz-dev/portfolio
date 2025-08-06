import { For, type Component } from 'solid-js'
import ProjectCard from '../components/ProjectCard'
import { allProjects } from '../data/projects'
import { Title } from '@solidjs/meta'

const Projects: Component = () => <>
    <Title>Projects | Ketzzz</Title>

    <section>
        <h2>Projects</h2>

        <div class='projects'>
            <For each={allProjects}>
                {project => <ProjectCard project={project} />}
            </For>
        </div>
    </section>
</>

export default Projects