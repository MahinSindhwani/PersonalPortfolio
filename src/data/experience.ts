export interface Job {
  period: string;
  role: string;
  organisation: string;
  summary: string;
  highlights?: string[];
  stack?: string[];
}

export const EXPERIENCE: Job[] = [
  {
    period: 'Sep 2025 to Aug 2026',
    role: 'Software Developer Intern',
    organisation: 'Enaimco',
    summary:
      'Full-stack developer on a subsea digital twin platform used by offshore engineering teams. I owned features end to end.',
    highlights: [
      'Shipped production features engineers used every day, including an ROV utilization dashboard and a valve request workflow.',
      'Built internal tools that let engineers manage their own files in Azure, removing a developer bottleneck.',
      'Used analytics and feature flags to release safely and base decisions on real usage.',
      'Won two internal hackathons by applying AI to a real engineering problem.',
    ],
    stack: ['React', 'TypeScript', 'Cloudscape', 'Express', 'MongoDB', 'Azure'],
  },
  {
    period: '2024 to now',
    role: 'Peer-Assisted Learning Leader',
    organisation: 'Memorial University',
    summary:
      'I run weekly study sessions for first-year computer science and math, 5 to 15 students each, with activities I design myself.',
  },
  {
    period: '2024',
    role: 'Software Engineering Intern',
    organisation: 'Embrays Technologies',
    summary: 'Built responsive React components from designs and fixed bugs alongside the senior team.',
  },
];
