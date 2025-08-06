import type { Project, Skill } from './data'
import type { AnchorProps } from '@solidjs/router'

export type ContactFormStatus = 'idle' | 'sending' | 'success' | 'error'

export interface LinkButtonProps extends AnchorProps {
    icon?: string
}

export interface ProjectCardProps {
    project: Project
}

export interface SkillBadgeProps {
    skill: Skill
}

export interface SkillsListProps {
    title: string
    skills: Skill[]
}
