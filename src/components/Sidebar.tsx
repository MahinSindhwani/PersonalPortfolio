import { SIDEBAR_GROUPS } from '../data/sidebar';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar} aria-label="At a glance">
      {SIDEBAR_GROUPS.map((group) => (
        <dl key={group.title} className={styles.group}>
          <dt className={styles.title}>{group.title}</dt>
          {group.items.map((item) => (
            <dd key={item}>{item}</dd>
          ))}
        </dl>
      ))}
    </aside>
  );
}
