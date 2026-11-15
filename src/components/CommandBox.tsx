import { IconCheck, IconCopy } from '@tabler/icons-react';
import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { commandTabs } from '../data/content';
import type { CommandTab } from '../data/types';
import type { Platform } from '../hooks/useDevice';
import styles from './CommandBox.module.css';

/**
 * A real shell command for the user's OS, so a copied command works when pasted:
 * macOS `open`, Windows `start` (cmd and PowerShell), Linux `xdg-open`.
 * Downloads use curl (`curl.exe` on Windows so PowerShell doesn't swap in its own alias).
 */
type DesktopPlatform = Exclude<Platform, 'mobile'>;

function buildCommand(tab: CommandTab, platform: DesktopPlatform): string {
  const target = new URL(tab.href, window.location.origin).href;
  if (tab.download) return `${platform === 'windows' ? 'curl.exe' : 'curl'} -O ${target}`;
  const opener = { mac: 'open', windows: 'start', linux: 'xdg-open' }[platform];
  return `${opener} ${target}`;
}

async function writeClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export default function CommandBox({ platform }: { platform: DesktopPlatform }) {
  const [activeId, setActiveId] = useState(commandTabs[0].id);
  const [copied, setCopied] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const active = commandTabs.find((t) => t.id === activeId) ?? commandTabs[0];
  const command = buildCommand(active, platform);
  const split = command.lastIndexOf(active.value);
  const before = split >= 0 ? command.slice(0, split) : `${command} `;
  const after = split >= 0 ? command.slice(split + active.value.length) : '';

  function select(index: number) {
    setActiveId(commandTabs[index].id);
    setCopied(false);
    tabRefs.current[index]?.focus();
  }

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
    const ok = await writeClipboard(command);
    if (!ok) return;
    setCopied(true);
    window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setCopied(false), 2000);
  }

  const external = !active.download && !active.href.startsWith('mailto:');
  const copyLabel = `Copy ${active.label} command`;

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
          <span className={styles.prompt} aria-hidden="true">
            ${' '}
          </span>
          {before}
          <a
            className={styles.value}
            href={active.href}
            download={active.download || undefined}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
          >
            {active.value}
          </a>
          {after}
        </p>
        <button type="button" className={styles.copy} onClick={onCopy} aria-label={copyLabel} title={copyLabel}>
          {copied ? <IconCheck size={18} stroke={2} aria-hidden="true" /> : <IconCopy size={18} stroke={2} aria-hidden="true" />}
          {copied && <span>copied</span>}
        </button>
        <span className="visually-hidden" aria-live="polite">
          {copied ? `${active.label} copied to clipboard` : ''}
        </span>
      </div>
    </div>
  );
}
