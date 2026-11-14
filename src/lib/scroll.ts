const SECTION_SELECTOR = '[data-section]';
const SECTION_TOP_TOLERANCE = 8;

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: scrollBehavior() });
}

export function scrollToElement(element: HTMLElement) {
  element.scrollIntoView({ behavior: scrollBehavior() });
}

function isBelowViewportTop(element: HTMLElement): boolean {
  return element.getBoundingClientRect().top > SECTION_TOP_TOLERANCE;
}

export function scrollToNextSection() {
  const sections = Array.from(document.querySelectorAll<HTMLElement>(SECTION_SELECTOR));
  const next = sections.find(isBelowViewportTop);
  if (next) scrollToElement(next);
}
