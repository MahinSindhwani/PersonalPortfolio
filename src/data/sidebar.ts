import { PROFILE } from './profile';

export interface SidebarGroup {
  title: string;
  items: string[];
}

export const SIDEBAR_GROUPS: SidebarGroup[] = [
  { title: 'Now', items: ['Final year at Memorial', 'PAL | MATH 1001', 'Learning Rust'] },
  { title: 'Daily stack', items: ['typescript', 'react', 'express', 'mongodb'] },
  { title: 'Location', items: [PROFILE.location] },
];
