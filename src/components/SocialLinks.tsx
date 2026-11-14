import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { PROFILE } from '../data/profile';
import styles from './SocialLinks.module.css';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: PROFILE.githubUrl, Icon: IconBrandGithub },
  { label: 'LinkedIn', href: PROFILE.linkedinUrl, Icon: IconBrandLinkedin },
];

export default function SocialLinks() {
  return (
    <span className={styles.links}>
      {SOCIAL_LINKS.map(({ label, href, Icon }) => (
        <a key={label} className={styles.link} href={href} target="_blank" rel="noreferrer">
          <Icon className={styles.icon} size={20} stroke={1.75} aria-hidden="true" />
          <span className={styles.label}>{label}</span>
        </a>
      ))}
    </span>
  );
}
