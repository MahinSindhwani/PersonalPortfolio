import { useEffect, useRef, useState, type FormEvent } from 'react';
import { PROFILE } from '../data/profile';
import { splitName } from '../lib/name';
import { runCommand, TERMINAL_GREETING, type TerminalEntry } from '../lib/terminal';
import styles from './Terminal.module.css';

const PROMPT = '$';
const USER = splitName(PROFILE.name.toLowerCase()).first;

export default function Terminal() {
  const [entries, setEntries] = useState<TerminalEntry[]>([]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const screen = screenRef.current;
    if (screen) screen.scrollTop = screen.scrollHeight;
  }, [entries]);

  function submit(event: FormEvent) {
    event.preventDefault();
    setEntries((current) => [...current, { command: input, output: runCommand(input) }]);
    setInput('');
  }

  return (
    <div className={styles.window} onClick={() => inputRef.current?.focus()}>
      <div className={styles.bar}>{USER}@portfolio: ~</div>
      <div ref={screenRef} className={styles.screen}>
        <p className={styles.output}>{TERMINAL_GREETING}</p>
        {entries.map((entry, index) => (
          <div key={index}>
            <p className={styles.line}>
              <span className={styles.prompt}>{PROMPT}</span> {entry.command}
            </p>
            {entry.output && <p className={styles.output}>{entry.output}</p>}
          </div>
        ))}
        <form className={styles.line} onSubmit={submit}>
          <span className={styles.prompt} aria-hidden="true">
            {PROMPT}
          </span>
          <input
            ref={inputRef}
            className={styles.input}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            aria-label="Terminal command"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
}
