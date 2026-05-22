export interface Project {
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    technologies: string[];
    image?: string;
    githubUrl?: string;
    demoUrl?: string;
    featured: boolean;
    type: string;
    highlights: string[];
}