import type { ContactLink } from '../lib/contactLinks';
import ContactIcon from './ContactIcon';
import styles from './ContactButton.module.css';

interface ContactButtonProps {
  link: ContactLink;
  primary?: boolean;
}

export default function ContactButton({ link, primary = false }: ContactButtonProps) {
  return (
    <a
      className={`${styles.button} ${primary ? styles.primary : ''}`}
      href={link.href}
      download={link.download || undefined}
      target={link.external ? '_blank' : undefined}
      rel={link.external ? 'noreferrer' : undefined}
    >
      <ContactIcon kind={link.kind} />
      {link.label}
    </a>
  );
}
