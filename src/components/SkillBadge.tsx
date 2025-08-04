import { type Component } from 'solid-js'
import type { SkillBadgeProps } from '../types/component'

const SkillBadge: Component<SkillBadgeProps> = ({ skill: { name, icon, proficiency } }) => {
    const getStars = (proficiency: number) => {
        return '★'.repeat(proficiency) + '☆'.repeat(5 - proficiency)
    }

    return <div class='skill-badge'>
        {icon && <img class='icon' src={icon} alt='Icon' />}
        {name}

        <div class="skill-details">
            <span class="label">Proficiency</span>
            <span class="stars">{getStars(proficiency)}</span>
        </div>
    </div>
}

export default SkillBadge