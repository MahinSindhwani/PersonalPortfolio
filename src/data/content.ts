import type {
  Award,
  CommandTab,
  DoingItem,
  Faq,
  Job,
  Profile,
  Project,
  SidebarGroup,
  StackGroup,
  WhoamiLine,
} from './types';

/**
 * Source of truth for all website content. If anything changes, edit this file only.
 */

export const profile: Profile = {
  firstName: 'mahin',
  lastName: 'sindhwani',
  headline: "Full-stack developer from St. John's, Newfoundland",
  intro:
    'Final-year CS student at Memorial with a year of full-stack experience. I like figuring out how things work, then building them myself.',
  location: "St. John's, NL",
  email: 'mahinsindhwani@gmail.com',
  github: 'https://github.com/MahinSindhwani',
  linkedin: 'https://linkedin.com/in/mahinsindhwani',
  resume: '/resume.pdf',
};

export const commandTabs: CommandTab[] = [
  {
    id: 'email',
    label: 'email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    id: 'github',
    label: 'github',
    value: 'github.com/MahinSindhwani',
    href: profile.github,
  },
  {
    id: 'linkedin',
    label: 'linkedin',
    value: 'linkedin.com/in/mahinsindhwani',
    href: profile.linkedin,
  },
  {
    id: 'resume',
    label: 'resume',
    value: 'resume.pdf',
    href: profile.resume,
    download: true,
  },
];

export const whoami: WhoamiLine[] = [
  {
    verb: 'Read',
    target: 'education/memorial-university',
    detail: 'B.Sc. Computer Science, Minor in Math | May 2027',
    href: '#top',
  },
  {
    verb: 'Read',
    target: 'work/enaimco',
    detail: 'Software Developer Intern | 2025-2026',
    href: '#work',
  },
  {
    verb: 'Read',
    target: 'teaching/peer-assisted-learning',
    detail: 'PAL Leader, COMP 1001 + MATH 1001 | 2024-now',
    href: '#work',
  },
  {
    verb: 'Grep',
    target: '"hackathon"',
    detail: '1st IBM watsonx 2026 | 2 internal wins at Enaimco',
    href: '#projects',
  },
  {
    verb: 'Grep',
    target: '"awards"',
    detail: "M.O. Morgan Scholarship 2026-2027 | Dean's List 2024-2025",
    href: '#recognition',
  },
  {
    verb: 'Grep',
    target: '"ctf"',
    detail: '2nd of 13 CyberSafe NL 2025 | Mastercard CTF 2026',
    href: '#recognition',
  },
];

export const whoamiTagline =
  'I like knowing a little about everything. Lately: AI tooling, machine learning, game dev, and Rust.';

export const sidebar: SidebarGroup[] = [
  { title: 'Now', items: ['Final year at Memorial', 'PAL | MATH 1001', 'Learning Rust'] },
  { title: 'Daily stack', items: ['typescript', 'react', 'express', 'mongodb'] },
  { title: 'Location', items: [profile.location] },
];

export const doingIntro =
  "Mostly I build web apps end to end. The rest of the time I'm poking at whatever looks interesting.";

export const usually: DoingItem[] = [
  { title: 'Full-stack apps', detail: 'from the interface to the database' },
  { title: 'Useful tools', detail: 'dashboards and automations that save someone time' },
  { title: 'AI tooling', detail: 'wiring models into real workflows' },
  { title: 'Teaching', detail: 'explaining things until they make sense' },
];

export const exploring: DoingItem[] = [
  { title: 'Rust', detail: 'learning it from scratch' },
  { title: 'Backend & data', detail: 'going deeper on MongoDB and SQL' },
  { title: '3D modelling', detail: 'making cool things, maybe for a game of my own' },
  { title: 'New frameworks', detail: "Flutter and whatever's next, usually through a small, fun app" },
];

export const stack: StackGroup[] = [
  {
    label: 'languages',
    items: [
      { name: 'typescript', primary: true },
      { name: 'javascript', primary: true },
      { name: 'python', primary: true },
      { name: 'java' },
      { name: 'dart' },
      { name: 'rust', note: 'learning' },
    ],
  },
  {
    label: 'frameworks',
    items: [
      { name: 'react', primary: true },
      { name: 'express', primary: true },
      { name: 'flutter' },
      { name: 'reactflow' },
      { name: 'tanstack' },
      { name: 'cloudscape' },
    ],
  },
  {
    label: 'data & cloud',
    items: [
      { name: 'mongodb', primary: true },
      { name: 'azure', primary: true },
      { name: 'pandas' },
      { name: 'numpy' },
    ],
  },
  {
    label: 'tools',
    items: [
      { name: 'posthog' },
      { name: 'vitest' },
      { name: 'selenium' },
    ],
  },
];

export const jobs: Job[] = [
  {
    company: 'Enaimco',
    role: 'Software Developer Intern',
    period: '2025-2026',
    summary:
      'Full-stack developer on a subsea digital twin platform used by offshore engineering teams. I learned to own features end to end, from React and TypeScript interfaces to Express APIs and MongoDB data.',
    highlights: [
      'Shipped production features engineers relied on day to day, including an ROV utilization dashboard and a valve request workflow.',
      'Built internal tools that removed developer bottlenecks, letting engineers manage their own files in Azure.',
      'Used analytics and feature flags to ship more safely and make product decisions based on real usage.',
      'Won two internal hackathons by applying AI (Claude over MCP) to a real engineering problem.',
    ],
    tech: ['react', 'typescript', 'cloudscape', 'express', 'mongodb', 'azure'],
  },
  {
    company: 'Memorial University',
    role: 'PAL Leader',
    period: '2024-now',
    summary:
      'Weekly sessions for COMP 1001 and MATH 1001, 5-15 students each, with activities I design myself.',
  },
  {
    company: 'Embrays Technologies',
    role: 'Software Engineering Intern',
    period: '2024',
    summary: 'Built responsive React components from designs and fixed bugs with the senior team.',
  },
];

export const projects: Project[] = [
  {
    name: "B'y Your Side",
    badge: '1st at IBM watsonx Hackathon 2026',
    description:
      'Healthcare AI assistant that blends patient records with wearable vitals to personalize health alerts.',
    tech: ['ibm watsonx', 'python', 'javascript'],
    links: [],
  },
  {
    name: 'IntuitiveCS',
    description: 'Interactive logic visualizer, co-developed and used in COMP 1002 at Memorial.',
    tech: ['react', 'reactflow'],
    links: [
      { label: 'live', href: 'https://intuitivecs.ca' },
      { label: 'github', href: 'https://github.com/Intuitive-CS-Organisation/IntuitiveCS' },
    ],
  },
  {
    name: 'Marketplace Negotiator',
    description:
      'Scrapes Facebook Marketplace and drafts personalized inquiries with the OpenAI API.',
    tech: ['python', 'selenium', 'openai'],
    links: [
      { label: 'demo', href: 'https://youtu.be/6-_mjKKVqMs' },
      {
        label: 'github',
        href: 'https://github.com/MahinSindhwani/Marketplace-Negotiator-for-students',
      },
    ],
  },
  {
    name: 'Game of Four',
    description:
      'Grid strategy game where players place and rotate pieces under rule constraints. Team OOP project.',
    tech: ['java'],
    links: [
      { label: 'demo', href: 'https://youtu.be/x_Ur_ylPR_M' },
      { label: 'github', href: 'https://github.com/MahinSindhwani/Game-of-Four' },
    ],
  },
  {
    name: 'This website',
    description:
      'Rebuilt from vanilla JS into React and TypeScript. No video backgrounds were harmed.',
    tech: ['react', 'typescript', 'vite'],
    links: [{ label: 'github', href: 'https://github.com/MahinSindhwani/PersonalPortfolio' }],
  },
];

export const awards: Award[] = [
  { title: '1st place', context: 'IBM watsonx Hackathon 2026' },
  { title: 'M.O. Morgan Alumni Scholarship', context: '2026-2027' },
  { title: '2nd of 13', context: 'CyberSafe NL CTF 2025' },
  { title: "Dean's List", context: 'Faculty of Science 2024-2025' },
  { title: '71st', context: 'ICPC North America Northeast 2023' },
];

export const faqTitle = 'Frequently unasked questions';

export const faq: Faq[] = [
  {
    question: 'Why did you redesign this website?',
    answer: "Because I hated the old one, and Claude didn't exist back then.",
  },
  {
    question: "What would you do if software development doesn't work out?",
    answer:
      'Probably become a chef and maybe open a cafe. Or teach.',
  },
  {
    question: "Favourite hike in St. John's?",
    answer: "Cobbler Path. I've done it four times now.",
  },
];
