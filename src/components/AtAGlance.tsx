import { AT_A_GLANCE } from '../data/atAGlance';
import styles from './AtAGlance.module.css';

export default function AtAGlance() {
  return (
    <section className={styles.panel} aria-label="At a glance">
      <div className={styles.groups}>
        {AT_A_GLANCE.map((group) => (
          <dl key={group.title} className={styles.group}>
            <dt className={styles.title}>{group.title}</dt>
            {group.items.map((item) => (
              <dd key={item}>{item}</dd>
            ))}
          </dl>
        ))}
      </div>
    </section>
  );
}
