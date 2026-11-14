import { useEffect } from 'react';
import { isPlainLeftClick } from '../lib/keyboard';
import { scrollToElement, scrollToTop } from '../lib/scroll';

const IN_PAGE_LINK_SELECTOR = 'a[href^="#"]';
const TOP_ID = 'top';

function findLinkedElement(event: MouseEvent): HTMLElement | null {
  const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(IN_PAGE_LINK_SELECTOR);
  const id = link?.getAttribute('href')?.slice(1);
  return id ? document.getElementById(id) : null;
}

function scrollTo(target: HTMLElement) {
  if (target.id === TOP_ID) scrollToTop();
  else scrollToElement(target);
}

function moveFocusTo(target: HTMLElement) {
  if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
}

// Scrolling in script, not by following the link, keeps the #hash out of the address bar.
function followInPageLink(event: MouseEvent) {
  if (!isPlainLeftClick(event)) return;
  const target = findLinkedElement(event);
  if (!target) return;
  event.preventDefault();
  scrollTo(target);
  moveFocusTo(target);
}

export function useInPageLinks() {
  useEffect(() => {
    document.addEventListener('click', followInPageLink);
    return () => document.removeEventListener('click', followInPageLink);
  }, []);
}
