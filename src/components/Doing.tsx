import { DOING_INTRO, EXPLORING, USUALLY } from '../data/doing';
import DoingList from './DoingList';
import Section from './Section';
import styles from './Doing.module.css';

const DONE_MARKER = '[*]';
const OPEN_MARKER = '[ ]';

export default function Doing() {
  return (
    <Section id="doing" title="What I do">
      <p className={styles.intro}>{DOING_INTRO}</p>
      <div className={styles.columns}>
        <DoingList label="usually" marker={DONE_MARKER} items={USUALLY} />
        <DoingList label="exploring" marker={OPEN_MARKER} items={EXPLORING} />
      </div>
    </Section>
  );
}
