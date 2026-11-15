import { WHOAMI_LINES, WHOAMI_TAGLINE } from '../data/whoami';
import ShortcutHints from './ShortcutHints';
import Sidebar from './Sidebar';
import styles from './Whoami.module.css';

export default function Whoami({ showShortcuts }: { showShortcuts: boolean }) {
  return (
    <section className={styles.panel} aria-label="Summary">
      <div className={styles.log}>
        <p className={styles.task}>
          * Task <span className={styles.verb}>"whoami"</span>
        </p>
        <ul className={styles.lines}>
          {WHOAMI_LINES.map((line) => (
            <li key={line.target}>
              <a className={styles.line} href={line.href}>
                <span className={styles.verb}>{line.verb}</span>
                <span>{line.target}</span>
                <span className={styles.detail}>{line.detail}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className={styles.tagline}>{WHOAMI_TAGLINE}</p>
        {showShortcuts && <ShortcutHints />}
      </div>
      <Sidebar />
    </section>
  );
}
