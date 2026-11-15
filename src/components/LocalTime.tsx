import { PROFILE } from '../data/profile';
import { useNow } from '../hooks/useNow';
import { formatLocalTime } from '../lib/localTime';
import styles from './LocalTime.module.css';

const REFRESH_MS = 30_000;

export default function LocalTime() {
  const now = useNow(REFRESH_MS);

  return (
    <p className={styles.time}>
      <span className={styles.dot} aria-hidden="true" />
      <time dateTime={now.toISOString()}>{formatLocalTime(now, PROFILE.timeZone)}</time> in {PROFILE.city}
    </p>
  );
}
