import type { Skill } from "../types"
import unityIcon from "../assets/icons/unity.svg"
import csIcon from "../assets/icons/cs.svg"
import godotIcon from "../assets/icons/godot.svg"
import bevyIcon from "../assets/icons/bevy.svg"
import rustIcon from "../assets/icons/rust.svg"
import cIcon from "../assets/icons/c.svg"
import cppIcon from "../assets/icons/cpp.svg"
import jsIcon from "../assets/icons/js.svg"
import tsIcon from "../assets/icons/ts.svg"
import nodeIcon from "../assets/icons/node.svg"
import solidIcon from "../assets/icons/solid.svg"
import viteIcon from "../assets/icons/vite.svg"
import htmlIcon from "../assets/icons/html.svg"
import cssIcon from "../assets/icons/css.svg"
import gitIcon from "../assets/icons/git.svg"

export const languages: Skill[] = [
    { name: "GDScript", icon: godotIcon, category: "language" },
    { name: "C#", icon: csIcon, category: "language" },
    { name: "Rust", icon: rustIcon, category: "language" },
    { name: "C", icon: cIcon, category: "language" },
    { name: "C++", icon: cppIcon, category: "language" },
    { name: "TypeScript", icon: tsIcon, category: "language" },
    { name: "JavaScript", icon: jsIcon, category: "language" },
    { name: "HTML", icon: htmlIcon, category: "language" },
    { name: "CSS", icon: cssIcon, category: "language" }
]

export const engines: Skill[] = [
    { name: "Godot", icon: godotIcon, category: "engine" },
    { name: "Unity", icon: unityIcon, category: "engine" },
    { name: "Bevy", icon: bevyIcon, category: "engine" }
]

export const tools: Skill[] = [
    { name: "Node.js", icon: nodeIcon, category: "tool" },
    { name: "Solid.js", icon: solidIcon, category: "tool" },
    { name: "Vite", icon: viteIcon, category: "tool" },
    { name: "Git", icon: gitIcon, category: "tool" }
]

// Aggregate all skills
export const allSkills: Skill[] = [
    ...languages,
    ...engines,
    ...tools
]