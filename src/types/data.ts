export interface Project {
    // id: string
    title: string
    description: string
    link: string
    tags: string[]
    featured?: boolean
    createdAt?: Date
    updatedAt?: Date
    metadata?: {
        repo?: string
        demo?: string
        coverImage?: string
    }
}

export interface Skill {
    // id: string
    name: string
    icon?: string
    category: "language" | "engine" | "tool"
    proficiency?: 1 | 2 | 3 | 4 | 5  // 1-5 rating
    yearsOfExperience?: number
}

export interface SkillGroup {
    category: string
    skills: Skill[]
}

export interface ProjectGroup {
    category: string
    projects: Project[]
}