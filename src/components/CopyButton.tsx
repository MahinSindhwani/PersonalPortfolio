import { IconCheck, IconCopy } from '@tabler/icons-react';
import styles from './CopyButton.module.css';

interface CopyButtonProps {
  label: string;
  copied: boolean;
  copiedMessage: string;
  onCopy: () => void;
}

const ICON_SIZE = 18;

export default function CopyButton({ label, copied, copiedMessage, onCopy }: CopyButtonProps) {
  const Icon = copied ? IconCheck : IconCopy;

  return (
    <>
      <button type="button" className={styles.button} onClick={onCopy} aria-label={label} title={label}>
        <Icon size={ICON_SIZE} stroke={2} aria-hidden="true" />
        {copied && <span>copied</span>}
      </button>
      <span className="visually-hidden" aria-live="polite">
        {copied ? copiedMessage : ''}
      </span>
    </>
  );
}
