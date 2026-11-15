export interface Highlight {
  lead: string;
  detail: string;
}

export interface Job {
  period: string;
  role: string;
  organisation: string;
  summary?: string;
  highlights?: Highlight[];
  stack?: string[];
}

export const EXPERIENCE: Job[] = [
  {
    period: '2025-2026',
    role: 'Software Developer Intern',
    organisation: 'Enaimco',
    highlights: [
      {
        lead: 'Shipped 4+ production features',
        detail: 'that offshore engineering teams relied on day to day, including an ROV utilization dashboard and a valve request workflow.',
      },
      {
        lead: 'Built internal tools',
        detail: 'that cut hours of manual work, letting engineers manage their own files in Azure Blob Storage.',
      },
      {
        lead: 'Used analytics and feature flags',
        detail: 'to ship more safely and make product decisions based on real usage.',
      },
      {
        lead: 'Won two internal hackathons',
        detail: 'by applying AI to real engineering problems.',
      },
    ],
    stack: ['react', 'typescript', 'cloudscape', 'express', 'mongodb', 'azure'],
  },
  {
    period: '2024-now',
    role: 'Peer Assisted Learning Leader',
    organisation: 'Memorial University',
    summary:
      'I run weekly study sessions for first-year computer science and math, explaining hard course topics in plain terms and designing interactive activities students work through together.',
  },
  {
    period: '2024',
    role: 'Software Engineering Intern',
    organisation: 'Embrays Technologies',
    summary: 'Built responsive React components from designs and fixed bugs with the senior team.',
    stack: ['react', 'javascript'],
  },
];
