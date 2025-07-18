import SkillBadge, { type Skill } from "./SkillBadge"
import "./SkillsSection.css"

export default function SkillsSection({ title, skills }: { title: string, skills: Skill[] }) {
    return <div class="skills-section">
        <h3>{title}</h3>
        <ul class="skills-list">
            {skills.map((skill) => <li class="skill"><SkillBadge skill={skill} /></li>)}
        </ul>
    </div>
}