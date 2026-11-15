import type { Job } from '../data/experience';
import bullets from '../styles/bullets.module.css';
import rows from '../styles/rows.module.css';
import text from '../styles/text.module.css';
import styles from './JobEntry.module.css';

const HIGHLIGHT_MARKER = '-';

export default function JobEntry({ job }: { job: Job }) {
  return (
    <article className={rows.row}>
      <span className={rows.label}>{job.period}</span>
      <div className={`${rows.body} ${styles.body}`}>
        <h3 className={styles.heading}>
          <span className={`${text.strong} ${text.lead}`}>{job.organisation}</span> {job.role}
        </h3>
        <p className={styles.summary}>{job.summary}</p>
        {job.highlights && (
          <ul className={styles.highlights}>
            {job.highlights.map((highlight) => (
              <li key={highlight} className={styles.highlight}>
                <span className={bullets.marker} aria-hidden="true">
                  {HIGHLIGHT_MARKER}
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
        {job.stack && <span className={`${text.muted} ${text.small}`}>{job.stack.join(' · ')}</span>}
      </div>
    </article>
  );
}
