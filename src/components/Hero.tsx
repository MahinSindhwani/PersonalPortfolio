import { useState } from 'react';
import { PROFILE } from '../data/profile';
import { detectPlatform } from '../lib/platform';
import CommandBox from './CommandBox';
import styles from './Hero.module.css';

export default function Hero() {
  const [platform] = useState(detectPlatform);

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <h1 id="hero-title" className={styles.title}>
        {PROFILE.headline}
      </h1>
      <p className={styles.intro}>{PROFILE.intro}</p>
      {platform !== 'mobile' && <CommandBox platform={platform} />}
    </section>
  );
}
