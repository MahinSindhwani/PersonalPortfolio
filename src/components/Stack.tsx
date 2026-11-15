import { STACK } from '../data/stack';
import rows from '../styles/rows.module.css';
import text from '../styles/text.module.css';
import Section from './Section';
import styles from './Stack.module.css';

export default function Stack() {
  return (
    <Section id="stack" title="Stack">
      <div>
        {STACK.map((group) => (
          <div key={group.label} className={rows.row}>
            <span className={rows.label}>{group.label}</span>
            <ul className={`${rows.body} ${styles.items}`}>
              {group.items.map((item) => (
                <li key={item.name} className={item.primary ? styles.primary : undefined}>
                  {item.name}
                  {item.note && <span className={text.muted}> ({item.note})</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
