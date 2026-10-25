import { IconCheck, IconCopy } from '@tabler/icons-react';
import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { commandTabs } from '../data/content';
import type { CommandTab } from '../data/types';
import styles from './CommandBox.module.css';

/** What the copy button puts on the clipboard: the email itself, or a full URL. */
function copyText(tab: CommandTab): string {
  if (tab.href.startsWith('mailto:')) return tab.value;
  return new URL(tab.href, window.location.origin).toString();
}

async function writeClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export default function CommandBox() {
  const [activeId, setActiveId] = useState(commandTabs[0].id);
  const [copied, setCopied] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const resetTimer = useRef<number | undefined>(undefined);

  const active = commandTabs.find((t) => t.id === activeId) ?? commandTabs[0];

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  function select(index: number) {
    const tab = commandTabs[index];
    setActiveId(tab.id);
    setCopied(false);
    tabRefs.current[index]?.focus();
  }

  // Arrow keys move between tabs, as in a native tab list.
  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = commandTabs.length - 1;
    if (event.key === 'ArrowRight') select(index === last ? 0 : index + 1);
    else if (event.key === 'ArrowLeft') select(index === 0 ? last : index - 1);
    else if (event.key === 'Home') select(0);
    else if (event.key === 'End') select(last);
    else return;
    event.preventDefault();
  }

  async function onCopy() {
    const ok = await writeClipboard(copyText(active));
    if (!ok) return;
    setCopied(true);
    window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setCopied(false), 1600);
  }

  const external = !active.download && !active.href.startsWith('mailto:');

  return (
    <div className={styles.box}>
      <div role="tablist" aria-label="Ways to reach me" className={styles.tabs}>
        {commandTabs.map((tab, index) => {
          const selected = tab.id === active.id;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`cmd-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls="cmd-panel"
              tabIndex={selected ? 0 : -1}
              className={styles.tab}
              onClick={() => select(index)}
              onKeyDown={(e) => onTabKeyDown(e, index)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div role="tabpanel" id="cmd-panel" aria-labelledby={`cmd-tab-${active.id}`} className={styles.panel}>
        <p className={styles.command}>
          {active.prefix}
          <a
            className={styles.value}
            href={active.href}
            download={active.download || undefined}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
          >
            {active.value}
          </a>
        </p>
        <button type="button" className={styles.copy} onClick={onCopy} aria-label={`Copy ${active.label}`}>
          {copied ? (
            <>
              <IconCheck size={16} stroke={2} aria-hidden="true" />
              copied
            </>
          ) : (
            <IconCopy size={16} stroke={2} aria-hidden="true" />
          )}
        </button>
        <span className="visually-hidden" aria-live="polite">
          {copied ? `${active.label} copied to clipboard` : ''}
        </span>
      </div>
    </div>
  );
}
