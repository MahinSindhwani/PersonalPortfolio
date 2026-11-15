import { IconArrowUpRight } from '@tabler/icons-react';
import type { Project } from '../data/projects';
import StackList from './StackList';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.name}>{project.name}</h3>
      {project.award && <span className={styles.award}>{project.award}</span>}
      <p className={styles.description}>{project.description}</p>
      <StackList items={project.stack} />
      {project.note && <p className={styles.note}>{project.note}</p>}
      {project.links && (
        <ul className={styles.links}>
          {project.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
                <IconArrowUpRight size={15} stroke={2} aria-hidden="true" />
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
