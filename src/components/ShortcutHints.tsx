import { SHORTCUTS } from '../data/shortcuts';
import styles from './ShortcutHints.module.css';

export default function ShortcutHints() {
  return (
    <ul className={styles.hints} aria-label="Keyboard shortcuts">
      {SHORTCUTS.map((shortcut) => (
        <li key={shortcut.key}>
          <kbd>{shortcut.key}</kbd> {shortcut.label}
        </li>
      ))}
    </ul>
  );
}
