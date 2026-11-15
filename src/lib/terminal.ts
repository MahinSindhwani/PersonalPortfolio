export const TERMINAL_GREETING = 'Type help and press Enter.';

export interface TerminalEntry {
  command: string;
  output: string;
}

export function runCommand(input: string): string {
  const command = input.trim();
  if (command === '') return '';
  if (command === 'help') return 'Commands are on their way. Check back soon.';
  return `command not found: ${command}`;
}
