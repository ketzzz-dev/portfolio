import type { Project } from '../types/data'

export const featuredProjects: Project[] = [
    {
        title: 'Fizix',
        description: 'A simple yet powerful 3D physics engine built from scratch using Position-Based Dynamics (PBD).',
        link: 'https://github.com/ketzzz-dev/fizix',
        tags: ['physics', 'rust', '3D'],
        featured: true
    },
    {
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '',
        tags: ['godot', 'game', '2D'],
        featured: true
    }
]

export const allProjects: Project[] = [
    ...featuredProjects,
    {
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '',
        tags: ['webgl', 'threejs', 'music']
    },
    {
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: '',
        tags: ['rust', 'ecs', 'game-dev']
    }
]