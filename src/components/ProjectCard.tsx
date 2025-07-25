import type { Component } from "solid-js"
import type { ProjectCardProps } from "../types"

const ProjectCard: Component<ProjectCardProps> = ({ project: { title, link, description } }) => {
	return <a class="project-card" href={link} target="_blank" rel="noopener noreferrer">
 		<h3>{title}</h3>
 		<p>{description}</p>
 	</a>
}

export default ProjectCard