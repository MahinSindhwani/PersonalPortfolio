import type { DoingItem } from '../data/doing';
import bullets from '../styles/bullets.module.css';
import text from '../styles/text.module.css';
import styles from './DoingList.module.css';

interface DoingListProps {
  label: string;
  marker: string;
  items: DoingItem[];
}

export default function DoingList({ label, marker, items }: DoingListProps) {
  return (
    <div className={styles.column}>
      <span className={styles.label}>{label}</span>
      <ul className={bullets.list}>
        {items.map((item) => (
          <li key={item.title} className={bullets.item}>
            <span className={bullets.marker} aria-hidden="true">
              {marker}
            </span>
            <span>
              <span className={`${text.strong} ${text.lead}`}>{item.title}</span> {item.detail}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
