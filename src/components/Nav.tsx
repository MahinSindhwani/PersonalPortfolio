import { NAV_SECTIONS } from '../data/sections';
import { PROFILE } from '../data/profile';
import { RESUME_LINK } from '../lib/contactLinks';
import { splitName } from '../lib/name';
import ContactIcon from './ContactIcon';
import styles from './Nav.module.css';

const WORDMARK = splitName(PROFILE.name.toLowerCase());

export default function Nav() {
  return (
    <nav className={styles.nav} aria-label="Main">
      <a href="#top" className={styles.wordmark} aria-label={`${PROFILE.name}, back to top`}>
        <span className={styles.wordmarkMuted}>{WORDMARK.first}</span>
        {WORDMARK.last}
      </a>
      <div className={styles.actions}>
        <ul className={styles.links}>
          {NAV_SECTIONS.map((section) => (
            <li key={section.id}>
              <a className={styles.link} href={`#${section.id}`}>
                {section.title}
              </a>
            </li>
          ))}
        </ul>
        <a className={styles.resume} href={RESUME_LINK.href} download>
          <ContactIcon kind={RESUME_LINK.kind} />
          {RESUME_LINK.label}
        </a>
      </div>
    </nav>
  );
}
