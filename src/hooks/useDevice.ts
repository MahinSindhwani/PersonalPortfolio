import { useSyncExternalStore } from 'react';

export type Platform = 'mac' | 'windows' | 'linux' | 'mobile';

/** Best guess at the visitor's OS, used to show a terminal command that works for them. */
export function detectPlatform(): Platform {
  const nav = navigator as Navigator & { userAgentData?: { platform?: string; mobile?: boolean } };
  const ua = navigator.userAgent;
  if (nav.userAgentData?.mobile || /Android|iPhone|iPad|iPod/i.test(ua)) return 'mobile';
  // iPadOS reports itself as a Mac, but has touch.
  if (/Mac/i.test(ua) && navigator.maxTouchPoints > 1) return 'mobile';
  const platform = (nav.userAgentData?.platform ?? navigator.platform ?? '').toLowerCase();
  if (platform.includes('win') || /Windows/i.test(ua)) return 'windows';
  if (platform.includes('mac') || /Mac/i.test(ua)) return 'mac';
  return 'linux';
}

const KEYBOARD_QUERY = '(hover: hover) and (pointer: fine)';

function subscribe(callback: () => void) {
  const mql = window.matchMedia(KEYBOARD_QUERY);
  mql.addEventListener('change', callback);
  return () => mql.removeEventListener('change', callback);
}

/**
 * True on devices with a mouse or trackpad (laptops, desktops), false on phones and tablets.
 * Used to only enable and advertise keyboard shortcuts where a keyboard is likely.
 */
export function useHasKeyboard(): boolean {
  const finePointer = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(KEYBOARD_QUERY).matches,
    () => false,
  );
  // Some phones misreport hover support, so double-check the OS too.
  return finePointer && detectPlatform() !== 'mobile';
}
