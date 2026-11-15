export type ShortcutAction = 'top' | 'resume';

export interface Shortcut {
  key: string;
  label: string;
  action: ShortcutAction;
}

export const SHORTCUTS: Shortcut[] = [
  { key: 'g', label: 'back to top', action: 'top' },
  { key: 'r', label: 'open resume', action: 'resume' },
];
