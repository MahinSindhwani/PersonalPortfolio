import { IconArrowUpRight } from '@tabler/icons-react';
import { projects } from '../data/content';
import Section, { sectionStyles as s } from './Section';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.name} className={styles.card}>
            <h3 className={styles.name}>{project.name}</h3>
            {project.badge && <span className={styles.badge}>{project.badge}</span>}
            <p className={styles.description}>{project.description}</p>
            <span className={`${s.muted} ${s.small}`}>{project.tech.join(' · ')}</span>
            {project.links.length > 0 && (
              <ul className={styles.links}>
                {project.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                      <IconArrowUpRight size={14} stroke={2} aria-hidden="true" />
                      <span className="visually-hidden"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
