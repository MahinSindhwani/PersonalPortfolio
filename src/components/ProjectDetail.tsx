import { IconBrandGithub } from '@tabler/icons-react';
import type { Project } from '../data/projects';
import ProjectPreview from './ProjectPreview';
import styles from './ProjectDetail.module.css';

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className={styles.detail}>
      <ProjectPreview project={project} />
      <div className={styles.body}>
        {project.award && <span className={styles.award}>{project.award}</span>}
        <p className={styles.description}>{project.description}</p>
        {project.githubUrl && (
          <a className={styles.code} href={project.githubUrl} target="_blank" rel="noreferrer">
            <IconBrandGithub size={20} stroke={1.75} aria-hidden="true" />
            <span className="visually-hidden">{project.name} source code on GitHub (opens in a new tab)</span>
          </a>
        )}
      </div>
    </div>
  );
}
