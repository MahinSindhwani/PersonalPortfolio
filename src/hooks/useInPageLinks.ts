import { useEffect } from 'react';
import { scrollToElement, scrollToTop } from '../lib/scroll';

/**
 * In-page links scroll with JavaScript instead of letting the
 * browser jump, so no #hash is written to the address bar.
 */
export function useInPageLinks() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;

      const id = link.getAttribute('href')!.slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!target) return;

      event.preventDefault();
      if (id === 'top') scrollToTop();
      else scrollToElement(target);

      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
}
