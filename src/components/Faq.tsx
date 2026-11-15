import { useState, type MouseEvent } from 'react';
import { FAQ } from '../data/faq';
import { SECTIONS } from '../data/sections';
import Section from './Section';
import styles from './Faq.module.css';

const NONE_OPEN = -1;

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  function toggleQuestion(event: MouseEvent<HTMLElement>, index: number) {
    event.preventDefault();
    setOpenIndex((current) => (current === index ? NONE_OPEN : index));
  }

  return (
    <Section section={SECTIONS.faq}>
      <div className={styles.list}>
        {FAQ.map((entry, index) => (
          <details key={entry.question} className={styles.item} open={openIndex === index}>
            <summary onClick={(event) => toggleQuestion(event, index)}>{entry.question}</summary>
            <p className={styles.answer}>{entry.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
