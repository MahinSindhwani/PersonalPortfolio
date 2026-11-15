import { useState } from 'react';
import { PROFILE } from '../data/profile';
import { detectPlatform } from '../lib/platform';
import CommandBox from './CommandBox';
import Terminal from './Terminal';
import styles from './Hero.module.css';

const ROLE_SEPARATOR = ' · ';

export default function Hero() {
  const [platform] = useState(detectPlatform);
  const isDesktop = platform !== 'mobile';

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.text}>
        <p className={styles.prompt} aria-hidden="true">
          <span className={styles.dollar}>$</span> whoami
        </p>
        <h1 id="hero-title" className={styles.title}>
          {PROFILE.name}
        </h1>
        <p className={styles.role}>
          {PROFILE.role}
          {ROLE_SEPARATOR}
          <span className={styles.region}>{PROFILE.region}</span>
        </p>
        <p className={styles.intro}>{PROFILE.intro}</p>
        {isDesktop && <CommandBox platform={platform} />}
      </div>
      {isDesktop && (
        <div className={styles.terminal}>
          <Terminal />
        </div>
      )}
    </section>
  );
}
