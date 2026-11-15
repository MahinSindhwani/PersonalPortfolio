import type { Fact } from './types';

export interface GlanceFact extends Fact {
  highlighted?: boolean;
}

export const AT_A_GLANCE: GlanceFact[] = [
  { label: 'Now', value: 'Final-year Computer Science, Memorial University' },
  { label: 'Graduating', value: 'May 2027, B.Sc. with a Minor in Math' },
  { label: 'Available', value: 'Open to work after May 2027', highlighted: true },
  { label: 'Experience', value: 'One year of full-stack work at Enaimco' },
  { label: 'Latest win', value: '1st place, IBM watsonx Hackathon 2026' },
  { label: 'Based in', value: "St. John's, NL" },
];
