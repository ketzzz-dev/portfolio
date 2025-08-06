import { For, type Component } from 'solid-js'
import type { SkillsListProps } from '../types/component'
import SkillBadge from './SkillBadge'

const SkillsList: Component<SkillsListProps> = ({ title, skills }) => {
    return <div class='skills-list'>
        <h3>{title}</h3>
        <ul>
            <For each={skills}>
                {skill => <li><SkillBadge skill={skill} /></li>}
            </For>
        </ul>
    </div>
}

export default SkillsList