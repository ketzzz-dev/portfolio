import type { Component } from "solid-js"
import "./SkillBadge.css"

export interface Skill {
    name: string
    icon?: string
}

export interface SkillBadgeProps {
    skill: Skill
}

const SkillBadge: Component<SkillBadgeProps> = ({ skill: { name, icon } }) => <>
    <div class="skill-badge">
        {icon && <img class="icon" src={icon} alt="Button Icon" />}
        {name}
    </div>
</>

export default SkillBadge