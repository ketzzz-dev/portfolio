import { createSignal, Show, type Component } from 'solid-js'
import type { SkillBadgeProps } from '../types/component'

const SkillBadge: Component<SkillBadgeProps> = ({ skill: { name, icon, proficiency, yearsOfExperience } }) => {
    const [showDetails, setShowDetails] = createSignal(false)

    return <button
        class='button skill-badge'

        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
    >
        {icon && <img class='icon' src={icon} alt='Button Icon' />}
        {name}

        <Show when={showDetails()}>
            <div class='skill-details'>
                <div class="proficiency-bar">
                    <div
                        class="progress"
                        style={{ width: `${(proficiency / 5) * 100}%` }}
                    />
                    <span class="label">Proficiency</span>
                </div>
            </div>
        </Show>
    </button>
}

export default SkillBadge