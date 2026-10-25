import { profile } from '../data/content';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <span className={styles.links}>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </span>
      </div>
      <div className={styles.giant} aria-hidden="true">
        {profile.lastName}
      </div>
    </footer>
  );
}
