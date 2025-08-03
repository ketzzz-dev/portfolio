import type { Component } from 'solid-js'
import { useSetPageTitle } from '../hooks/usePageTitle'
import AButton from '../components/AButton'
import ProjectCard from '../components/ProjectCard'
import SkillsList from '../components/SkillsList'
import githubIcon from '../assets/icons/github.svg'
import { featuredProjects } from '../data/projects'
import { languages, engines, tools } from '../data/skills'

const Home: Component = () => {
    useSetPageTitle()

    return <>
        <section class='hero'>
            <h1>Hey, I'm Lucas!</h1>

            <p>
                {'\t'}I'm also known online as <strong>Ketzzz</strong>,
                and I'm an 18-year-old Computer Science student with over 5 years of programming experience and a strong passion for game development.
            </p>
            <p>
                {'\t'}I primarily work with <strong>Godot</strong> and <strong>Unity</strong>,
                and I'm also exploring the <strong>Rust</strong> ecosystem with the <strong>Bevy</strong> game engine.
                On the side, I occasionally explore <strong>music production</strong> and <strong>3D modeling</strong>,
                mixing tech with creativity wherever I can.
                
            </p>
            <p>
                {'\t'}This site is my personal hub and a place to share my projects, ideas, and experiments.
                Take a look around, and feel free to reach out if you're curious, interested, or just want to talk shop!
            </p>

            <div class='links-container'>
                <AButton icon={githubIcon} target='_blank' href='https://github.com/ketzzz-dev'>Visit my GitHub</AButton>
                <AButton href='/projects'>Check out my Projects</AButton>
            </div>
        </section>

        <section class='featured-projects'>
            <h2>Featured Projects</h2>

            <div class='projects-container'>
                {featuredProjects.map((project) => <ProjectCard project={project} />)}
            </div>
        </section>

        <section class='technical-skills'>
            <h2>Technical Skills</h2>
            <p>Click on a skill to see more about them!</p>

            <div class='skills-container'>
                <SkillsList title='Languages' skills={languages} />
                <SkillsList title='Engines' skills={engines} />
                <SkillsList title='Tools' skills={tools} />
            </div>
        </section>

        <section class='contact'>
            <h2>Contact Me</h2>
            <p>
                Got questions, want to collaborate, or just feel like chatting? I'm always open to talk.
            </p>
        </section>
    </>
}

export default Home