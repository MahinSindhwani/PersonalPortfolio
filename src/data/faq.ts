export interface FaqEntry {
  question: string;
  answer: string;
}

export const FAQ_TITLE = 'Frequently unasked questions';

export const FAQ: FaqEntry[] = [
  {
    question: 'Tabs or spaces?',
    answer: 'Tabs. Spaces is a red flag.',
  },
  {
    question: 'Background music while you work?',
    answer: 'The Strokes on repeat. Ode to the Mets is peak.',
  },
  {
    question: "Favourite hike in St. John's?",
    answer: 'Cobblers Path. Done it like 4 times.',
  },
];
