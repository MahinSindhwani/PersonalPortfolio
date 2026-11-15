import { PROFILE } from '../data/profile';
import { splitName } from '../lib/name';
import ShortcutHints from './ShortcutHints';
import SocialLinks from './SocialLinks';
import styles from './Footer.module.css';

const LAST_NAME = splitName(PROFILE.name.toLowerCase()).last;

export default function Footer({ showShortcuts }: { showShortcuts: boolean }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <a className={styles.email} href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
        <SocialLinks placement="footer" />
      </div>
      {showShortcuts && <ShortcutHints />}
      <div className={styles.giant} aria-hidden="true">
        {LAST_NAME}
      </div>
    </footer>
  );
}
