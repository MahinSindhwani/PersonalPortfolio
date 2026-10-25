import { faq, faqTitle } from '../data/content';
import Section from './Section';
import styles from './Faq.module.css';

export default function Faq() {
  return (
    <Section id="faq" title={faqTitle}>
      <div className={styles.list}>
        {faq.map((item, i) => (
          <details key={item.question} className={styles.item} open={i === 0}>
            <summary>{item.question}</summary>
            <p className={styles.answer}>{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
