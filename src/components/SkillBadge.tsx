import "./SkillBadge.css"

export type Skill = {
    name: string
    icon?: string
}

export default function SkillBadge({ skill: { name, icon } }: { skill: Skill }) {
    return <div class="skill-badge">
        {icon && <img class="icon" src={icon} alt="Button Icon" />}
        {name}
    </div>
}