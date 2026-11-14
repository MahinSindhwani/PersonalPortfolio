import { EXPERIENCE } from '../data/experience';
import JobEntry from './JobEntry';
import Section from './Section';

export default function Work() {
  return (
    <Section id="work" title="Work">
      <div>
        {EXPERIENCE.map((job) => (
          <JobEntry key={job.organisation} job={job} />
        ))}
      </div>
    </Section>
  );
}
