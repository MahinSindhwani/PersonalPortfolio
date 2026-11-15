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
          <span className={`${text.strong} ${text.lead}`}>{job.role}</span> {job.organisation}
        </h3>
        {job.summary && <p className={styles.summary}>{job.summary}</p>}
        {job.highlights && (
          <ul className={styles.highlights}>
            {job.highlights.map((highlight) => (
              <li key={highlight.lead} className={styles.highlight}>
                <span className={bullets.marker} aria-hidden="true">
                  {HIGHLIGHT_MARKER}
                </span>
                <span>
                  <span className={styles.lead}>{highlight.lead}</span> {highlight.detail}
                </span>
              </li>
            ))}
          </ul>
        )}
        {job.stack && <span className={`${text.muted} ${text.small}`}>{job.stack.join(' · ')}</span>}
      </div>
    </article>
  );
}
