import { useEffect, useRef } from 'react';

export function useHoverIntent(delayMs: number) {
  const timer = useRef<number | undefined>(undefined);

  function cancel() {
    window.clearTimeout(timer.current);
  }

  function schedule(action: () => void) {
    cancel();
    timer.current = window.setTimeout(action, delayMs);
  }

  useEffect(() => cancel, []);

  return { schedule, cancel };
}
