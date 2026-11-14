export type ShortcutAction = 'top' | 'nextSection' | 'resume';

export interface Shortcut {
  key: string;
  label: string;
  action: ShortcutAction;
}

export const SHORTCUTS: Shortcut[] = [
  { key: 'g', label: 'back to top', action: 'top' },
  { key: 'n', label: 'next section', action: 'nextSection' },
  { key: 'r', label: 'open resume', action: 'resume' },
];
