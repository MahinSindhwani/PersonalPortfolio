import { PROFILE } from '../data/profile';
import { splitName } from '../lib/name';
import SocialLinks from './SocialLinks';
import styles from './Footer.module.css';

const LAST_NAME = splitName(PROFILE.name.toLowerCase()).last;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
        <SocialLinks />
      </div>
      <div className={styles.giant} aria-hidden="true">
        {LAST_NAME}
      </div>
    </footer>
  );
}
