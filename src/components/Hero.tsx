import { PROFILE } from '../data/profile';
import { CONTACT_LINKS } from '../lib/contactLinks';
import { splitName } from '../lib/name';
import AtAGlance from './AtAGlance';
import ContactButton from './ContactButton';
import LocalTime from './LocalTime';
import styles from './Hero.module.css';

const NAME = splitName(PROFILE.name);

export default function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.intro}>
        <LocalTime />
        <h1 id="hero-title" className={styles.name}>
          <span>{NAME.first}</span> <span>{NAME.last}</span>
        </h1>
        <p className={styles.headline}>{PROFILE.headline}</p>
        <p className={styles.tagline}>{PROFILE.tagline}</p>
        <ul className={styles.contact} aria-label="Contact">
          {CONTACT_LINKS.map((link, index) => (
            <li key={link.kind}>
              <ContactButton link={link} primary={index === 0} />
            </li>
          ))}
        </ul>
      </div>
      <AtAGlance />
    </section>
  );
}
