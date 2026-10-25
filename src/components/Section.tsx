import type { ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`} data-section>
      <h2 id={`${id}-title`} className={styles.title}>
        {title}
      </h2>
      {children}
    </section>
  );
}

export { styles as sectionStyles };
