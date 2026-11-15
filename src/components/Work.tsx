import { jobs } from '../data/content';
import Section, { sectionStyles as s } from './Section';
import styles from './Work.module.css';

export default function Work() {
  return (
    <Section id="work" title="Work">
      <div>
        {jobs.map((job) => (
          <article key={job.company} className={s.row}>
            <span className={s.rowLabel}>{job.period}</span>
            <div className={`${s.rowBody} ${styles.body}`}>
              <h3 className={styles.heading}>
                <span className={`${s.strong} ${s.lead}`}>{job.company}</span> {job.role}
              </h3>
              {job.summary && <p className={styles.summary}>{job.summary}</p>}
              {job.highlights && (
                <ul className={styles.highlights}>
                  {job.highlights.map((h) => (
                    <li key={h}>
                      <span className={s.marker} aria-hidden="true">
                        -
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
              {job.tech && <span className={`${s.muted} ${s.small}`}>{job.tech.join(' · ')}</span>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
