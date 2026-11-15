import { AT_A_GLANCE } from '../data/atAGlance';
import styles from './AtAGlance.module.css';

export default function AtAGlance() {
  return (
    <dl className={styles.grid} aria-label="At a glance">
      {AT_A_GLANCE.map((fact) => (
        <div key={fact.label} className={`${styles.fact} ${fact.highlighted ? styles.highlighted : ''}`}>
          <dt className={styles.label}>{fact.label}</dt>
          <dd className={styles.value}>{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
