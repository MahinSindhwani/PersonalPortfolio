import type { Job } from '../data/experience';
import bullets from '../styles/bullets.module.css';
import rows from '../styles/rows.module.css';
import StackList from './StackList';
import styles from './JobEntry.module.css';

const HIGHLIGHT_MARKER = '-';

export default function JobEntry({ job }: { job: Job }) {
  return (
    <article className={rows.row}>
      <p className={rows.label}>{job.period}</p>
      <div className={`${rows.body} ${styles.body}`}>
        <h3 className={styles.heading}>
          <span className={styles.role}>{job.role}</span>
          <span className={styles.organisation}>{job.organisation}</span>
        </h3>
        <p className={styles.summary}>{job.summary}</p>
        {job.highlights && (
          <ul className={bullets.list}>
            {job.highlights.map((highlight) => (
              <li key={highlight} className={bullets.item}>
                <span className={bullets.marker} aria-hidden="true">
                  {HIGHLIGHT_MARKER}
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
        {job.stack && <StackList items={job.stack} />}
      </div>
    </article>
  );
}
