import { IconDownload } from '@tabler/icons-react';
import { PROFILE } from '../data/profile';
import { initials } from '../lib/name';
import SocialLinks from './SocialLinks';
import styles from './Nav.module.css';

const MONOGRAM = initials(PROFILE.name);

export default function Nav() {
  return (
    <nav className={styles.nav} aria-label="Main">
      <a href="#top" className={styles.logo} aria-label={`${PROFILE.name}, back to top`}>
        <span className={styles.bracket}>[</span>
        {MONOGRAM}
        <span className={styles.bracket}>]</span>
      </a>
      <div className={styles.actions}>
        <SocialLinks placement="nav" />
        <a className={styles.resume} href={PROFILE.resumePath} download>
          <IconDownload size={16} stroke={2} aria-hidden="true" />
          Resume
        </a>
      </div>
    </nav>
  );
}
