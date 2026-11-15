import { IconArrowUpRight } from '@tabler/icons-react';
import type { Project } from '../data/projects';
import { toSlug } from '../lib/slug';
import styles from './ProjectPreview.module.css';

function PreviewScreen({ project }: { project: Project }) {
  if (project.screenshot) {
    return <img className={styles.image} src={project.screenshot} alt={`${project.name} screenshot`} />;
  }
  return (
    <div className={styles.empty}>
      <span className={styles.emptyName}>{project.name}</span>
    </div>
  );
}

export default function ProjectPreview({ project }: { project: Project }) {
  const screen = <PreviewScreen project={project} />;

  return (
    <figure className={styles.window}>
      <figcaption className={styles.bar}>
        <span>~/projects/{toSlug(project.name)}</span>
        {project.liveUrl && (
          <span className={styles.host}>
            {new URL(project.liveUrl).host}
            <IconArrowUpRight size={14} stroke={2} aria-hidden="true" />
          </span>
        )}
      </figcaption>
      {project.liveUrl ? (
        <a className={styles.screen} href={project.liveUrl} target="_blank" rel="noreferrer">
          {screen}
          <span className="visually-hidden">Open {project.name} (opens in a new tab)</span>
        </a>
      ) : (
        <div className={styles.screen}>{screen}</div>
      )}
    </figure>
  );
}
