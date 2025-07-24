import type { Component } from "solid-js"
import SkillBadge, { type Skill } from "./SkillBadge"
import "./SkillsSection.css"

export interface SkillSectionProps {
    title: string
    skills: Skill[]
}

const SkillsSection: Component<SkillSectionProps> = ({ title, skills }) => {
    return <div class="skills-section">
        <h3>{title}</h3>
        <ul class="skills-list">
            {skills.map((skill) => <li class="skill"><SkillBadge skill={skill} /></li>)}
        </ul>
    </div>
}

export default SkillsSection