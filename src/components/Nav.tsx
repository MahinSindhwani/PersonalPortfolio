import { IconDownload } from '@tabler/icons-react';
import { profile } from '../data/content';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav} aria-label="Main">
      <a href="#top" className={styles.wordmark} aria-label="Mahin Sindhwani, back to top">
        <span className={styles.wordmarkMuted}>{profile.firstName}</span>
        {profile.lastName}
      </a>
      <div className={styles.links}>
        <a className={styles.link} href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className={styles.link} href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className={styles.resume} href={profile.resume} download>
          <IconDownload size={16} stroke={2} aria-hidden="true" />
          Resume
        </a>
      </div>
    </nav>
  );
}
