import type { Component } from 'solid-js'
import type { SkillsListProps } from '../types/component'
import SkillBadge from './SkillBadge'

const SkillsList: Component<SkillsListProps> = ({ title, skills }) => {
    return <div class='skills-list'>
        <h3>{title}</h3>
        <ul>
            {skills.map((skill) => <li><SkillBadge skill={skill} /></li>)}
        </ul>
    </div>
}

export default SkillsList