import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { PROFILE } from '../data/profile';
import styles from './SocialLinks.module.css';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: PROFILE.githubUrl, Icon: IconBrandGithub },
  { label: 'LinkedIn', href: PROFILE.linkedinUrl, Icon: IconBrandLinkedin },
];

type SocialLinksPlacement = 'nav' | 'footer';

const LIST_CLASS: Record<SocialLinksPlacement, string> = {
  nav: styles.linksNav,
  footer: styles.linksFooter,
};

const LINK_CLASS: Record<SocialLinksPlacement, string> = {
  nav: `${styles.link} ${styles.linkNav}`,
  footer: styles.link,
};

export default function SocialLinks({ placement }: { placement: SocialLinksPlacement }) {
  return (
    <span className={LIST_CLASS[placement]}>
      {SOCIAL_LINKS.map(({ label, href, Icon }) => (
        <a key={label} className={LINK_CLASS[placement]} href={href} target="_blank" rel="noreferrer">
          <Icon className={styles.icon} size={20} stroke={1.75} aria-hidden="true" />
          <span className={styles.label}>{label}</span>
        </a>
      ))}
    </span>
  );
}
