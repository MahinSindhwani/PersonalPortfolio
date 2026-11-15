import { RECOGNITION } from '../data/recognition';
import { SECTIONS } from '../data/sections';
import FactRows from './FactRows';
import Section from './Section';

export default function Recognition() {
  return (
    <Section section={SECTIONS.recognition}>
      <FactRows facts={RECOGNITION} />
    </Section>
  );
}
