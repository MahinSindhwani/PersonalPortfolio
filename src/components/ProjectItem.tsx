import type { ReactNode } from 'react';
import type { Project } from '../data/projects';
import styles from './ProjectItem.module.css';

interface ProjectItemProps {
  project: Project;
  active: boolean;
  onActivate: () => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  children: ReactNode;
}

export default function ProjectItem({ project, active, onActivate, onHoverStart, onHoverEnd, children }: ProjectItemProps) {
  return (
    <li className={active ? `${styles.item} ${styles.active}` : styles.item} onMouseEnter={onHoverStart} onMouseLeave={onHoverEnd}>
      <button type="button" className={styles.select} aria-expanded={active} onClick={onActivate} onFocus={onActivate}>
        <span className={styles.name}>{project.name}</span>
        <span className={styles.stack}>{project.stack.join(' · ')}</span>
      </button>
      {active && <div className={styles.detail}>{children}</div>}
    </li>
  );
}
