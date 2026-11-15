import type { ReactNode } from 'react';
import type { SectionInfo } from '../data/sections';
import styles from './Section.module.css';

interface SectionProps {
  section: SectionInfo;
  children: ReactNode;
}

export default function Section({ section, children }: SectionProps) {
  const titleId = `${section.id}-title`;

  return (
    <section id={section.id} className={styles.section} aria-labelledby={titleId} data-section>
      <h2 id={titleId} className={styles.title}>
        {section.title}
      </h2>
      {children}
    </section>
  );
}
