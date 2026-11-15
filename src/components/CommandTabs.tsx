import { useRef, type KeyboardEvent } from 'react';
import type { ContactCommand } from '../lib/contactCommands';
import styles from './CommandTabs.module.css';

interface CommandTabsProps {
  commands: ContactCommand[];
  activeId: string;
  panelId: string;
  onSelect: (id: string) => void;
}

export function commandTabId(commandId: string): string {
  return `cmd-tab-${commandId}`;
}

function nextTabIndex(key: string, index: number, count: number): number | null {
  const last = count - 1;
  if (key === 'ArrowRight') return index === last ? 0 : index + 1;
  if (key === 'ArrowLeft') return index === 0 ? last : index - 1;
  if (key === 'Home') return 0;
  if (key === 'End') return last;
  return null;
}

export default function CommandTabs({ commands, activeId, panelId, onSelect }: CommandTabsProps) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function selectTab(index: number) {
    onSelect(commands[index].id);
    tabRefs.current[index]?.focus();
  }

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const target = nextTabIndex(event.key, index, commands.length);
    if (target === null) return;
    selectTab(target);
    event.preventDefault();
  }

  return (
    <div role="tablist" aria-label="Ways to reach me" className={styles.tabs}>
      {commands.map((command, index) => {
        const selected = command.id === activeId;
        return (
          <button
            key={command.id}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            type="button"
            role="tab"
            id={commandTabId(command.id)}
            aria-selected={selected}
            aria-controls={panelId}
            tabIndex={selected ? 0 : -1}
            className={styles.tab}
            onClick={() => selectTab(index)}
            onKeyDown={(event) => onTabKeyDown(event, index)}
          >
            {command.label}
          </button>
        );
      })}
    </div>
  );
}
