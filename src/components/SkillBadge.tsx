import type { Component } from "solid-js"
import type { SkillBadgeProps } from "../types"

const SkillBadge: Component<SkillBadgeProps> = ({ skill: { name, icon } }) => <>
    <div class="skill-badge">
        {icon && <img class="icon" src={icon} alt="Button Icon" />}
        {name}
    </div>
</>

export default SkillBadge