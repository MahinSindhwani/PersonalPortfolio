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
    period: '2025-2026',
    role: 'Software Developer Intern',
    organisation: 'Enaimco',
    summary:
      'Full-stack developer on a subsea digital twin platform used by offshore engineering teams. I learned to own features end to end, from React and TypeScript interfaces to Express APIs and MongoDB data.',
    highlights: [
      'Shipped production features engineers relied on day to day, including an ROV utilization dashboard and a valve request workflow.',
      'Built internal tools that removed developer bottlenecks, letting engineers manage their own files in Azure.',
      'Used analytics and feature flags to ship more safely and make product decisions based on real usage.',
      'Won two internal hackathons by applying AI to a real engineering problem.',
    ],
    stack: ['react', 'typescript', 'cloudscape', 'express', 'mongodb', 'azure'],
  },
  {
    period: '2024-now',
    role: 'PAL Leader',
    organisation: 'Memorial University',
    summary: 'Weekly sessions for COMP 1001 and MATH 1001, 5-15 students each, with activities I design myself.',
  },
  {
    period: '2024',
    role: 'Software Engineering Intern',
    organisation: 'Embrays Technologies',
    summary: 'Built responsive React components from designs and fixed bugs with the senior team.',
  },
];
