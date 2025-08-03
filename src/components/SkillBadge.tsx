import { createSignal, Show, type Component } from 'solid-js'
import type { SkillBadgeProps } from '../types/component'

const SkillBadge: Component<SkillBadgeProps> = ({ skill: { name, icon, proficiency, yearsOfExperience } }) => {
    const [showDetails, setShowDetails] = createSignal(false)

    return <button
        class='button skill-badge'

        onMouseDown={() => setShowDetails(prev => !prev)}
        // onMouseLeave={() => setShowDetails(false)}
    >
        {icon && <img class='icon' src={icon} alt='Button Icon' />}
        {name}

        <Show when={showDetails()}>
            <div class='skill-details'>
                
            </div>
        </Show>
    </button>
}

export default SkillBadge