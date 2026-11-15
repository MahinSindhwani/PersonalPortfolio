import { SECTIONS } from '../data/sections';
import { SKILLS } from '../data/skills';
import FactRows from './FactRows';
import Section from './Section';

export default function Skills() {
  return (
    <Section section={SECTIONS.skills}>
      <FactRows facts={SKILLS} />
    </Section>
  );
}
