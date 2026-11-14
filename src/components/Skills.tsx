import { SKILLS } from '../data/skills';
import FactRows from './FactRows';
import Section from './Section';

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <FactRows facts={SKILLS} />
    </Section>
  );
}
