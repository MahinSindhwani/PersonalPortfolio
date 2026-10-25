import { useState, type MouseEvent } from 'react';
import { faq, faqTitle } from '../data/content';
import Section from './Section';
import styles from './Faq.module.css';

/** Accordion: opening one question closes the others. */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  function onSummaryClick(event: MouseEvent<HTMLElement>, index: number) {
    event.preventDefault();
    setOpenIndex((current) => (current === index ? -1 : index));
  }

  return (
    <Section id="faq" title={faqTitle}>
      <div className={styles.list}>
        {faq.map((item, i) => (
          <details
            key={item.question}
            className={styles.item}
            open={openIndex === i}
          >
            <summary onClick={(e) => onSummaryClick(e, i)}>{item.question}</summary>
            <p className={styles.answer}>{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
