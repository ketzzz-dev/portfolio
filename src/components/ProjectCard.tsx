import AButton from "./AButton"
import "./ProjectCard.css"

export type Project = {
	title: string
	description: string
	link?: string
}

export default function ProjectCard({ project: { title, description, link } }: { project: Project }) {
	return <div class="project-card">
		<h3>{title}</h3>
		<p>{description}</p>
		{link && <AButton href={link} target="_blank" rel="noopener noreferrer">View Project</AButton>}
	</div>
}