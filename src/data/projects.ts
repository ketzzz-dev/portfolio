import type { Project } from '../types'

export const featuredProjects: Project[] = [
    {
        title: "Fizix",
        description: "A simple yet powerful 3D physics engine built from scratch using Position-Based Dynamics (PBD).",
        link: "https://github.com/ketzzz-dev/fizix",
        tags: ["physics", "rust", "3D"],
        featured: true
    },
    {
        title: "Project Aurora",
        description: "A 2D platformer game developed with Godot featuring unique light-based mechanics.",
        link: "",
        tags: ["godot", "game", "2D"],
        featured: true
    }
]

export const allProjects: Project[] = [
    ...featuredProjects,
    {
        title: "WebGL Visualizer",
        description: "Interactive music visualizer using Three.js and WebGL shaders.",
        link: "",
        tags: ["webgl", "threejs", "music"]
    },
    {
        title: "ECS Framework",
        description: "Entity Component System framework for game development in Rust.",
        link: "",
        tags: ["rust", "ecs", "game-dev"]
    }
]