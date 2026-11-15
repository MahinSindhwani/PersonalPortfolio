import { useCallback, useEffect, useRef, useState } from 'react';
import { copyText } from '../lib/clipboard';

const FEEDBACK_DURATION_MS = 2000;

export function useCopyFeedback() {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const clear = useCallback(() => {
    window.clearTimeout(resetTimer.current);
    setCopied(false);
  }, []);

  const copy = useCallback(async (text: string) => {
    if (!(await copyText(text))) return;
    setCopied(true);
    window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setCopied(false), FEEDBACK_DURATION_MS);
  }, []);

  return { copied, copy, clear };
}
