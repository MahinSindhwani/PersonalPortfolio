export interface WhoamiLine {
  verb: 'Read' | 'Grep';
  target: string;
  detail: string;
  href: string;
}

export const WHOAMI_LINES: WhoamiLine[] = [
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

export const WHOAMI_TAGLINE =
  'I like knowing a little about everything. Lately: AI tooling, machine learning, game dev, and Rust.';
