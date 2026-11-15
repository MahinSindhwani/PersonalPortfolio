export interface FaqEntry {
  question: string;
  answer: string;
}

export const FAQ_TITLE = 'Frequently unasked questions';

export const FAQ: FaqEntry[] = [
  {
    question: 'Why did you redesign this website?',
    answer: 'Because I hated the old one.',
  },
  {
    question: "What would you do if software development doesn't work out?",
    answer: 'Probably become a chef and maybe open a cafe. Or teach.',
  },
  {
    question: "Favourite hike in St. John's?",
    answer: "Cobbler Path. I've done it four times now.",
  },
];
