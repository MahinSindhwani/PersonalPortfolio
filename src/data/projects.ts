import type { Link } from './types';

export interface Project {
  name: string;
  description: string;
  stack: string[];
  award?: string;
  links?: Link[];
  note?: string;
}

export const PROJECTS: Project[] = [
  {
    name: "B'y Your Side",
    description:
      'Healthcare AI assistant that combines patient records with wearable vitals to personalize health alerts.',
    stack: ['IBM watsonx', 'Python', 'JavaScript'],
    award: '1st, IBM watsonx Hackathon 2026',
    note: 'Hackathon build, no public code',
  },
  {
    name: 'IntuitiveCS',
    description: 'Interactive logic visualizer, co-developed and used in a first-year course at Memorial.',
    stack: ['React', 'React Flow'],
    links: [
      { label: 'Live', href: 'https://intuitivecs.ca/' },
      { label: 'Code', href: 'https://github.com/Intuitive-CS-Organisation/IntuitiveCS' },
    ],
  },
  {
    name: 'Marketplace Negotiator',
    description: 'Scrapes Facebook Marketplace listings and drafts personalized inquiries with the OpenAI API.',
    stack: ['Python', 'Selenium', 'OpenAI'],
    links: [
      { label: 'Demo', href: 'https://youtu.be/6-_mjKKVqMs' },
      { label: 'Code', href: 'https://github.com/MahinSindhwani/Marketplace-Negotiator-for-students' },
    ],
  },
  {
    name: 'Game of Four',
    description: 'Grid strategy game where players place and rotate pieces under rule constraints. Team project.',
    stack: ['Java'],
    links: [
      { label: 'Demo', href: 'https://youtu.be/x_Ur_ylPR_M' },
      { label: 'Code', href: 'https://github.com/MahinSindhwani/Game-of-Four' },
    ],
  },
  {
    name: 'This website',
    description: 'My portfolio, rebuilt from vanilla JavaScript into React and TypeScript.',
    stack: ['React', 'TypeScript', 'Vite'],
    links: [{ label: 'Code', href: 'https://github.com/MahinSindhwani/PersonalPortfolio' }],
  },
];
