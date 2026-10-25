/** Smooth scrolling, unless the visitor has asked their OS to reduce motion. */
export function scrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: scrollBehavior() });
}

/** Scroll to an element without touching the URL. */
export function scrollToElement(el: HTMLElement) {
  el.scrollIntoView({ behavior: scrollBehavior() });
}
