import { sidebar, whoami, whoamiTagline } from '../data/content';
import styles from './Whoami.module.css';

/** The terminal-style summary panel under the hero. */
export default function Whoami() {
  const last = whoami.length - 1;

  return (
    <section className={styles.panel} aria-label="Summary">
      <div className={styles.log}>
        <p className={styles.task}>
          * Task <span className={styles.verb}>"whoami"</span>
        </p>
        <ul className={styles.lines}>
          {whoami.map((line, i) => (
            <li key={line.target}>
              <a className={styles.line} href={line.href}>
                <span aria-hidden="true">{i === last ? '└' : '├'}</span>
                <span className={styles.verb}>{line.verb}</span>
                <span>{line.target}</span>
                <span className={styles.detail}>{line.detail}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className={styles.tagline}>{whoamiTagline}</p>
        <ul className={styles.keys} aria-label="Keyboard shortcuts">
          <li>
            <kbd>g</kbd> back to top
          </li>
          <li>
            <kbd>n</kbd> next section
          </li>
          <li>
            <kbd>r</kbd> open resume
          </li>
        </ul>
      </div>

      <aside className={styles.sidebar} aria-label="At a glance">
        {sidebar.map((group) => (
          <dl key={group.title} className={styles.group}>
            <dt className={styles.groupTitle}>{group.title}</dt>
            {group.items.map((item) => (
              <dd key={item}>{item}</dd>
            ))}
          </dl>
        ))}
      </aside>
    </section>
  );
}
