import type { Skill } from '../types/data'
import unityIcon from '../assets/icons/unity.svg'
import csIcon from '../assets/icons/cs.svg'
import godotIcon from '../assets/icons/godot.svg'
import bevyIcon from '../assets/icons/bevy.svg'
import rustIcon from '../assets/icons/rust.svg'
import cIcon from '../assets/icons/c.svg'
import cppIcon from '../assets/icons/cpp.svg'
import jsIcon from '../assets/icons/js.svg'
import tsIcon from '../assets/icons/ts.svg'
import nodeIcon from '../assets/icons/node.svg'
import solidIcon from '../assets/icons/solid.svg'
import viteIcon from '../assets/icons/vite.svg'
import htmlIcon from '../assets/icons/html.svg'
import cssIcon from '../assets/icons/css.svg'
import gitIcon from '../assets/icons/git.svg'

export const languages: Skill[] = [
    { name: 'GDScript', icon: godotIcon, category: 'language', proficiency: 5 },
    { name: 'C#', icon: csIcon, category: 'language', proficiency: 5 },
    { name: 'Rust', icon: rustIcon, category: 'language', proficiency: 4 },
    { name: 'C', icon: cIcon, category: 'language', proficiency: 4 },
    { name: 'C++', icon: cppIcon, category: 'language', proficiency: 4 },
    { name: 'TypeScript', icon: tsIcon, category: 'language', proficiency: 5 },
    { name: 'JavaScript', icon: jsIcon, category: 'language', proficiency: 5 },
    { name: 'HTML', icon: htmlIcon, category: 'language', proficiency: 4 },
    { name: 'CSS', icon: cssIcon, category: 'language', proficiency: 4 }
]

export const engines: Skill[] = [
    { name: 'Godot', icon: godotIcon, category: 'engine', proficiency: 4 },
    { name: 'Unity', icon: unityIcon, category: 'engine', proficiency: 4 },
    { name: 'Bevy', icon: bevyIcon, category: 'engine', proficiency: 3 }
]

export const tools: Skill[] = [
    { name: 'Node.js', icon: nodeIcon, category: 'tool', proficiency: 4 },
    { name: 'Solid.js', icon: solidIcon, category: 'tool', proficiency: 3 },
    { name: 'Vite', icon: viteIcon, category: 'tool', proficiency: 3 },
    { name: 'Git', icon: gitIcon, category: 'tool', proficiency: 4 }
]

// Aggregate all skills
export const allSkills: Skill[] = [
    ...languages,
    ...engines,
    ...tools
]