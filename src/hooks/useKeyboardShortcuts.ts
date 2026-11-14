import { useEffect } from 'react';
import { PROFILE } from '../data/profile';
import { SHORTCUTS, type ShortcutAction } from '../data/shortcuts';
import { isPlainKeyPress } from '../lib/keyboard';
import { openInNewTab } from '../lib/navigation';
import { scrollToNextSection, scrollToTop } from '../lib/scroll';

const SHORTCUT_HANDLERS: Record<ShortcutAction, () => void> = {
  top: scrollToTop,
  nextSection: scrollToNextSection,
  resume: () => openInNewTab(PROFILE.resumePath),
};

function findShortcut(event: KeyboardEvent) {
  return SHORTCUTS.find((shortcut) => shortcut.key === event.key.toLowerCase());
}

function runShortcut(event: KeyboardEvent) {
  if (!isPlainKeyPress(event)) return;
  const shortcut = findShortcut(event);
  if (!shortcut) return;
  SHORTCUT_HANDLERS[shortcut.action]();
  event.preventDefault();
}

export function useKeyboardShortcuts(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;
    window.addEventListener('keydown', runShortcut);
    return () => window.removeEventListener('keydown', runShortcut);
  }, [enabled]);
}
