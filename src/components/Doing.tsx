import { doingIntro, exploring, usually } from '../data/content';
import type { DoingItem } from '../data/types';
import Section, { sectionStyles as s } from './Section';
import styles from './Doing.module.css';

function List({ label, marker, items }: { label: string; marker: string; items: DoingItem[] }) {
  return (
    <div className={styles.column}>
      <span className={styles.label}>{label}</span>
      <ul className={s.bullets}>
        {items.map((item) => (
          <li key={item.title} className={s.bullet}>
            <span className={s.marker} aria-hidden="true">
              {marker}
            </span>
            <span>
              <span className={`${s.strong} ${s.lead}`}>{item.title}</span> {item.detail}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Doing() {
  return (
    <Section id="doing" title="What I do">
      <p className={styles.intro}>{doingIntro}</p>
      <div className={styles.columns}>
        <List label="usually" marker="[*]" items={usually} />
        <List label="exploring" marker="[ ]" items={exploring} />
      </div>
    </Section>
  );
}
