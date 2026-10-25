import { profile } from '../data/content';
import CommandBox from './CommandBox';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <h1 id="hero-title" className={styles.title}>
        {profile.headline}
      </h1>
      <p className={styles.intro}>{profile.intro}</p>
      <CommandBox />
    </section>
  );
}
