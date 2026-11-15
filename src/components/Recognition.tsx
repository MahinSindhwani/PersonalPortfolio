import { AWARDS } from '../data/recognition';
import bullets from '../styles/bullets.module.css';
import text from '../styles/text.module.css';
import Section from './Section';

const AWARD_MARKER = '[*]';

export default function Recognition() {
  return (
    <Section id="recognition" title="Recognition">
      <ul className={bullets.list}>
        {AWARDS.map((award) => (
          <li key={award.title} className={bullets.item}>
            <span className={bullets.marker} aria-hidden="true">
              {AWARD_MARKER}
            </span>
            <span>
              <span className={text.bright}>{award.title}</span>, {award.context}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
