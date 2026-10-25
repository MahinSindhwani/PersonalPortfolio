import { stack } from '../data/content';
import Section, { sectionStyles as s } from './Section';
import styles from './Stack.module.css';

export default function Stack() {
  return (
    <Section id="stack" title="Stack">
      <div>
        {stack.map((group) => (
          <div key={group.label} className={s.row}>
            <span className={s.rowLabel}>{group.label}</span>
            <ul className={`${s.rowBody} ${styles.items}`}>
              {group.items.map((item) => (
                <li key={item.name} className={item.primary ? styles.primary : undefined}>
                  {item.name}
                  {item.note && <span className={s.muted}> ({item.note})</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
