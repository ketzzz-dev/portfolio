import type { Component } from "solid-js"
import "./ProjectCard.css"

export interface Project {
	title: string
	description: string
	link: string
}

export interface ProjectCardProps {
	project: Project
}

const ProjectCard: Component<ProjectCardProps> = ({ project: { title, link, description } }) => {
	return <a class="project-card" href={link} target="_blank" rel="noopener noreferrer">
 		<h3>{title}</h3>
 		<p>{description}</p>
 	</a>
}

export default ProjectCard