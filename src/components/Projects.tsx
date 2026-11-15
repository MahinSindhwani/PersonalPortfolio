import { useState } from 'react';
import { PROJECTS } from '../data/projects';
import { useHoverIntent } from '../hooks/useHoverIntent';
import ProjectDetail from './ProjectDetail';
import ProjectItem from './ProjectItem';
import Section from './Section';
import styles from './Projects.module.css';

// Long enough that sweeping across rows on the way to the preview does not switch projects.
const HOVER_INTENT_MS = 300;

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = PROJECTS[activeIndex];
  const hoverIntent = useHoverIntent(HOVER_INTENT_MS);

  function activate(index: number) {
    hoverIntent.cancel();
    setActiveIndex(index);
  }

  return (
    <Section id="projects" title="Projects">
      <div className={styles.layout}>
        <ul className={styles.list}>
          {PROJECTS.map((project, index) => (
            <ProjectItem
              key={project.name}
              project={project}
              active={index === activeIndex}
              onActivate={() => activate(index)}
              onHoverStart={() => hoverIntent.schedule(() => setActiveIndex(index))}
              onHoverEnd={hoverIntent.cancel}
            >
              <div className={styles.inline}>
                <ProjectDetail project={project} />
              </div>
            </ProjectItem>
          ))}
        </ul>
        <div className={styles.aside}>
          <ProjectDetail key={activeProject.name} project={activeProject} />
        </div>
      </div>
    </Section>
  );
}
