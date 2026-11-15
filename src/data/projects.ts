import type { Link } from './types';

export interface Project {
  name: string;
  description: string;
  stack: string[];
  award?: string;
  links?: Link[];
}

export const PROJECTS: Project[] = [
  {
    name: "B'y Your Side",
    award: '1st at IBM watsonx Hackathon 2026',
    description:
      'Healthcare AI assistant that blends patient records with wearable vitals to personalize health alerts.',
    stack: ['ibm watsonx', 'python', 'javascript'],
  },
  {
    name: 'IntuitiveCS',
    description: 'Interactive logic visualizer, co-developed and used in COMP 1002 at Memorial.',
    stack: ['react', 'reactflow'],
    links: [
      { label: 'live', href: 'https://intuitivecs.ca' },
      { label: 'github', href: 'https://github.com/Intuitive-CS-Organisation/IntuitiveCS' },
    ],
  },
  {
    name: 'Marketplace Negotiator',
    description: 'Scrapes Facebook Marketplace and drafts personalized inquiries with the OpenAI API.',
    stack: ['python', 'selenium', 'openai'],
    links: [
      { label: 'demo', href: 'https://youtu.be/6-_mjKKVqMs' },
      { label: 'github', href: 'https://github.com/MahinSindhwani/Marketplace-Negotiator-for-students' },
    ],
  },
  {
    name: 'Game of Four',
    description: 'Grid strategy game where players place and rotate pieces under rule constraints. Team OOP project.',
    stack: ['java'],
    links: [
      { label: 'demo', href: 'https://youtu.be/x_Ur_ylPR_M' },
      { label: 'github', href: 'https://github.com/MahinSindhwani/Game-of-Four' },
    ],
  },
  {
    name: 'This website',
    description: 'Rebuilt from vanilla JS into React and TypeScript. No video backgrounds were harmed.',
    stack: ['react', 'typescript', 'vite'],
    links: [{ label: 'github', href: 'https://github.com/MahinSindhwani/PersonalPortfolio' }],
  },
];
