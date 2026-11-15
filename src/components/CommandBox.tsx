import { useState } from 'react';
import { useCopyFeedback } from '../hooks/useCopyFeedback';
import { CONTACT_COMMANDS, opensInNewTab } from '../lib/contactCommands';
import type { DesktopPlatform } from '../lib/platform';
import { buildShellCommand, splitAroundValue } from '../lib/shellCommand';
import CommandTabs, { commandTabId } from './CommandTabs';
import CopyButton from './CopyButton';
import styles from './CommandBox.module.css';

const PANEL_ID = 'cmd-panel';

export default function CommandBox({ platform }: { platform: DesktopPlatform }) {
  const [activeId, setActiveId] = useState(CONTACT_COMMANDS[0].id);
  const { copied, copy, clear } = useCopyFeedback();

  const active = CONTACT_COMMANDS.find((command) => command.id === activeId) ?? CONTACT_COMMANDS[0];
  const shellCommand = buildShellCommand(active, platform);
  const { before, after } = splitAroundValue(shellCommand, active.value);
  const external = opensInNewTab(active);

  function selectCommand(id: string) {
    setActiveId(id);
    clear();
  }

  return (
    <div className={styles.box}>
      <CommandTabs commands={CONTACT_COMMANDS} activeId={active.id} panelId={PANEL_ID} onSelect={selectCommand} />

      <div role="tabpanel" id={PANEL_ID} aria-labelledby={commandTabId(active.id)} className={styles.panel}>
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
        <CopyButton
          label={`Copy ${active.label} command`}
          copied={copied}
          copiedMessage={`${active.label} copied to clipboard`}
          onCopy={() => copy(shellCommand)}
        />
      </div>
    </div>
  );
}
