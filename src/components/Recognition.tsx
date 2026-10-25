import { awards } from '../data/content';
import Section, { sectionStyles as s } from './Section';

export default function Recognition() {
  return (
    <Section id="recognition" title="Recognition">
      <ul className={s.bullets}>
        {awards.map((award) => (
          <li key={award.title} className={s.bullet}>
            <span className={s.marker} aria-hidden="true">
              [*]
            </span>
            <span>
              <span className={s.bright}>{award.title}</span>, {award.context}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
