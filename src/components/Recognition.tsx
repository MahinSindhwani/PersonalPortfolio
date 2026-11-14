import { RECOGNITION } from '../data/recognition';
import FactRows from './FactRows';
import Section from './Section';

export default function Recognition() {
  return (
    <Section id="recognition" title="Recognition">
      <FactRows facts={RECOGNITION} />
    </Section>
  );
}
