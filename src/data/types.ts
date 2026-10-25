/** Shapes for everything the site renders. Edit content in content.ts, not here. */

export interface Link {
  label: string;
  href: string;
}

export interface Profile {
  firstName: string;
  lastName: string;
  headline: string;
  intro: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resume: string;
}

export interface CommandTab {
  id: string;
  label: string;
  prefix: string;
  value: string;
  href: string;
  download?: boolean;
}

export interface WhoamiLine {
  verb: 'Read' | 'Grep';
  target: string;
  detail: string;
  href: string;
}

export interface SidebarGroup {
  title: string;
  items: string[];
}

export interface DoingItem {
  title: string;
  detail: string;
}

export interface StackItem {
  name: string;
  primary?: boolean;
  note?: string;
}

export interface StackGroup {
  label: string;
  items: StackItem[];
}

export interface Job {
  company: string;
  role: string;
  period: string;
  summary?: string;
  highlights?: string[];
  tech?: string[];
}

export interface Project {
  name: string;
  description: string;
  badge?: string;
  tech: string[];
  links: Link[];
}

export interface Award {
  title: string;
  context: string;
}

export interface Faq {
  question: string;
  answer: string;
}
