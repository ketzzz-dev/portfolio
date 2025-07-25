import type { Project, Skill } from "./data"
import type { AnchorProps } from "@solidjs/router"

export interface AButtonProps extends AnchorProps {
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

// export interface ProjectsSectionProps {
//     title: string
//     projects: Project[]
//     limit?: number
//     showViewAll?: boolean
// }

// export interface MainLayoutProps {
//     showFooter?: boolean
//     fullWidth?: boolean
// }