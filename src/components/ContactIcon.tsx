import { IconBrandGithub, IconBrandLinkedin, IconDownload, IconMail, type Icon } from '@tabler/icons-react';
import type { ContactKind } from '../lib/contactLinks';

const ICONS: Record<ContactKind, Icon> = {
  resume: IconDownload,
  email: IconMail,
  github: IconBrandGithub,
  linkedin: IconBrandLinkedin,
};

const ICON_SIZE = 18;

export default function ContactIcon({ kind }: { kind: ContactKind }) {
  const Icon = ICONS[kind];
  return <Icon size={ICON_SIZE} stroke={1.75} aria-hidden="true" />;
}
