import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { profile } from '../data/content';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        {/* Text on desktop, icon on small screens, same as the nav. */}
        <span className={styles.links}>
          <a className={styles.link} href={profile.github} target="_blank" rel="noreferrer">
            <IconBrandGithub className={styles.icon} size={20} stroke={1.75} aria-hidden="true" />
            <span className={styles.linkText}>GitHub</span>
          </a>
          <a className={styles.link} href={profile.linkedin} target="_blank" rel="noreferrer">
            <IconBrandLinkedin className={styles.icon} size={20} stroke={1.75} aria-hidden="true" />
            <span className={styles.linkText}>LinkedIn</span>
          </a>
        </span>
      </div>
      <div className={styles.giant} aria-hidden="true">
        {profile.lastName}
      </div>
    </footer>
  );
}
