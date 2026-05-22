import {Project} from '../core/models/project.model';

export const PROJECTS: Project[] = [
  {
    title: 'CheckPoint',
    slug: 'checkpoint',
    shortDescription: 'Red social para gamers con sistema de experiencia y gamificación',
    description: 'Una descripción detallada del primer proyecto.',
    technologies: ['TypeScript', ' Angular', ' Node.js', ' Express', ' MySQL'],
    image: 'assets/images/project-1.jpg',
    githubUrl: 'https://github.com/sergiiomg/checkpoint',
    featured: true,
    type: 'Aplicación Web',
    highlights: ['Feature 1', 'Feature 2', 'Feature 3']
  },
  {
    title: 'LearnLytics',
    slug: 'learnlytics',
    shortDescription: 'Gestor de aprendizaje para estudiantes universitarios con IA integrada.',
    description: 'Una descripción detallada del segundo proyecto.',
    technologies: ['Ionic', ' Angular', ' Node.js', ' Express', ' MongoDB', ' OpenAI API'],
    image: 'assets/images/project-2.jpg',
    githubUrl: 'https://github.com/sergiiomg/learnlytics',
    featured: false,
    type: 'Aplicación Móvil',
    highlights: ['Feature 1', 'Feature 2', 'Feature 3']
  },
  {
    title: 'VAULT',
    slug: 'vault',
    shortDescription: 'Gestor de contraseñas cifrado de extremo a extremo.',
    description: 'Una descripción detallada del tercer proyecto.',
    technologies: ['Python', ' Argon2', ' AES-256'],
    image: 'assets/images/project-3.jpg',
    githubUrl: 'https://github.com/sergiiomg/LocalVault',
    demoUrl: 'https://github.com/sergiiomg/LocalVault/releases/tag/v1.0.0',
    featured: false,
    type: 'Aplicación de Escritorio',
    highlights: ['Feature 1', 'Feature 2', 'Feature 3']
  }
];