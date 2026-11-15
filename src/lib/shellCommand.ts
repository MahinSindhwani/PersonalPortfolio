import type { ContactCommand } from './contactCommands';
import type { DesktopPlatform } from './platform';

const OPENERS: Record<DesktopPlatform, string> = {
  mac: 'open',
  windows: 'start',
  linux: 'xdg-open',
};

// PowerShell aliases `curl` to its own cmdlet, so Windows needs the real binary by name.
const DOWNLOADERS: Record<DesktopPlatform, string> = {
  mac: 'curl',
  windows: 'curl.exe',
  linux: 'curl',
};

export function buildShellCommand(command: ContactCommand, platform: DesktopPlatform): string {
  const target = new URL(command.href, window.location.origin).href;
  if (command.download) return `${DOWNLOADERS[platform]} -O ${target}`;
  return `${OPENERS[platform]} ${target}`;
}

export interface SplitCommand {
  before: string;
  after: string;
}

export function splitAroundValue(shellCommand: string, value: string): SplitCommand {
  const start = shellCommand.lastIndexOf(value);
  if (start < 0) return { before: `${shellCommand} `, after: '' };
  return { before: shellCommand.slice(0, start), after: shellCommand.slice(start + value.length) };
}
