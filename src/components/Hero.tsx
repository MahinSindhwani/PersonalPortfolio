import { useState } from 'react';
import { profile } from '../data/content';
import { detectPlatform } from '../hooks/useDevice';
import CommandBox from './CommandBox';
import styles from './Hero.module.css';

export default function Hero() {
  // Terminal commands are no use on a phone, so the command box is desktop-only.
  const [platform] = useState(detectPlatform);

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <h1 id="hero-title" className={styles.title}>
        {profile.headline}
      </h1>
      <p className={styles.intro}>{profile.intro}</p>
      {platform !== 'mobile' && <CommandBox platform={platform} />}
    </section>
  );
}
