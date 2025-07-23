import "./ProjectCard.css"

export type Project = {
	title: string
	description: string
	link: string
}

export default function ProjectCard({ project: { title, description, link } }: { project: Project }) {
	return <a class="project-card" href={link} target="_blank" rel="noopener noreferrer">
		<h3>{title}</h3>
		<p>{description}</p>
	</a>
}