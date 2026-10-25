import { useEffect } from 'react';
import { profile } from '../data/content';

/** Ignore key presses while the user is typing or using browser shortcuts. */
function shouldIgnore(event: KeyboardEvent): boolean {
  if (event.metaKey || event.ctrlKey || event.altKey || event.repeat) return true;
  const target = event.target as HTMLElement | null;
  if (!target) return false;
  return target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName);
}

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
}

/** Jump to the first section whose top is below the top of the screen. */
function nextSection() {
  const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));
  const next = sections.find((el) => el.getBoundingClientRect().top > 8);
  next?.scrollIntoView({ behavior: scrollBehavior() });
}

/** g: back to top, n: next section, r: open resume. */
export function useKeyboardShortcuts() {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (shouldIgnore(event)) return;
      switch (event.key.toLowerCase()) {
        case 'g':
          window.scrollTo({ top: 0, behavior: scrollBehavior() });
          break;
        case 'n':
          nextSection();
          break;
        case 'r':
          window.open(profile.resume, '_blank', 'noopener');
          break;
        default:
          return;
      }
      event.preventDefault();
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);
}
