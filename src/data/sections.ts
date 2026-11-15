export interface SectionInfo {
  id: string;
  title: string;
}

export const SECTIONS = {
  work: { id: 'work', title: 'Work' },
  projects: { id: 'projects', title: 'Projects' },
  recognition: { id: 'recognition', title: 'Recognition' },
  skills: { id: 'skills', title: 'Skills' },
  about: { id: 'about', title: 'About' },
  faq: { id: 'faq', title: 'Frequently unasked questions' },
} as const satisfies Record<string, SectionInfo>;

export const NAV_SECTIONS: SectionInfo[] = [SECTIONS.work, SECTIONS.projects, SECTIONS.about];
