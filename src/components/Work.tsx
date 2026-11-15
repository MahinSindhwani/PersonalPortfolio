import { EXPERIENCE } from '../data/experience';
import { SECTIONS } from '../data/sections';
import JobEntry from './JobEntry';
import Section from './Section';

export default function Work() {
  return (
    <Section section={SECTIONS.work}>
      <div>
        {EXPERIENCE.map((job) => (
          <JobEntry key={job.organisation} job={job} />
        ))}
      </div>
    </Section>
  );
}
