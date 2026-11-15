import { ABOUT_PARAGRAPHS } from '../data/about';
import { EXPLORING, USUALLY } from '../data/doing';
import { SECTIONS } from '../data/sections';
import DoingList from './DoingList';
import Section from './Section';
import styles from './About.module.css';

const DONE_MARKER = '[*]';
const OPEN_MARKER = '[ ]';

export default function About() {
  return (
    <Section section={SECTIONS.about}>
      <div className={styles.text}>
        {ABOUT_PARAGRAPHS.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className={styles.columns}>
        <DoingList label="Usually" marker={DONE_MARKER} items={USUALLY} />
        <DoingList label="Exploring" marker={OPEN_MARKER} items={EXPLORING} />
      </div>
    </Section>
  );
}
