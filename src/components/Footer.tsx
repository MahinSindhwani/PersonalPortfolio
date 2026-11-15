import { PROFILE } from '../data/profile';
import { EMAIL_LINK, SOCIAL_LINKS } from '../lib/contactLinks';
import { splitName } from '../lib/name';
import ShortcutHints from './ShortcutHints';
import styles from './Footer.module.css';

const LAST_NAME = splitName(PROFILE.name.toLowerCase()).last;

export default function Footer({ showShortcuts }: { showShortcuts: boolean }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <a href={EMAIL_LINK.href}>{PROFILE.email}</a>
        <ul className={styles.links}>
          {SOCIAL_LINKS.map((link) => (
            <li key={link.kind}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {showShortcuts && <ShortcutHints />}
      <div className={styles.giant} aria-hidden="true">
        {LAST_NAME}
      </div>
    </footer>
  );
}
