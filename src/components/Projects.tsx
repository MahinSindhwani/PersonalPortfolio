import { PROJECTS } from '../data/projects';
import { SECTIONS } from '../data/sections';
import ProjectCard from './ProjectCard';
import Section from './Section';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <Section section={SECTIONS.projects}>
      <div className={styles.grid}>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
}
