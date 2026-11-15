function scrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: scrollBehavior() });
}

export function scrollToElement(element: HTMLElement) {
  element.scrollIntoView({ behavior: scrollBehavior() });
}
