import { PROFILE } from '../data/profile';

export type ContactKind = 'resume' | 'email' | 'github' | 'linkedin';

export interface ContactLink {
  kind: ContactKind;
  label: string;
  href: string;
  download?: boolean;
  external?: boolean;
}

export const RESUME_LINK: ContactLink = {
  kind: 'resume',
  label: 'Resume',
  href: PROFILE.resumePath,
  download: true,
};

export const EMAIL_LINK: ContactLink = {
  kind: 'email',
  label: 'Email',
  href: `mailto:${PROFILE.email}`,
};

export const SOCIAL_LINKS: ContactLink[] = [
  { kind: 'github', label: 'GitHub', href: PROFILE.githubUrl, external: true },
  { kind: 'linkedin', label: 'LinkedIn', href: PROFILE.linkedinUrl, external: true },
];

export const CONTACT_LINKS: ContactLink[] = [RESUME_LINK, EMAIL_LINK, ...SOCIAL_LINKS];
