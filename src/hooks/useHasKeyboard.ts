import { useSyncExternalStore } from 'react';
import { detectPlatform } from '../lib/platform';

const FINE_POINTER_QUERY = '(hover: hover) and (pointer: fine)';

function subscribeToPointerChange(onChange: () => void) {
  const query = window.matchMedia(FINE_POINTER_QUERY);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
}

function hasFinePointer(): boolean {
  return window.matchMedia(FINE_POINTER_QUERY).matches;
}

export function useHasKeyboard(): boolean {
  const finePointer = useSyncExternalStore(subscribeToPointerChange, hasFinePointer, () => false);
  // Some phones misreport hover support, so the OS check backs it up.
  return finePointer && detectPlatform() !== 'mobile';
}
