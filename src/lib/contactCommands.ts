import { PROFILE } from '../data/profile';

export interface ContactCommand {
  id: string;
  label: string;
  value: string;
  href: string;
  download?: boolean;
}

function withoutProtocol(url: string): string {
  return url.replace(/^https?:\/\//, '');
}

function withoutLeadingSlash(path: string): string {
  return path.replace(/^\//, '');
}

export const CONTACT_COMMANDS: ContactCommand[] = [
  { id: 'email', label: 'email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { id: 'github', label: 'github', value: withoutProtocol(PROFILE.githubUrl), href: PROFILE.githubUrl },
  { id: 'linkedin', label: 'linkedin', value: withoutProtocol(PROFILE.linkedinUrl), href: PROFILE.linkedinUrl },
  {
    id: 'resume',
    label: 'resume',
    value: withoutLeadingSlash(PROFILE.resumePath),
    href: PROFILE.resumePath,
    download: true,
  },
];

export function opensInNewTab(command: ContactCommand): boolean {
  return !command.download && !command.href.startsWith('mailto:');
}
