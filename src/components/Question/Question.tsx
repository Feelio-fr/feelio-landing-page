import React, { useState } from 'react';
import styles from './Question.module.css';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.faqItem}>
      <div className={styles.question} onClick={toggleFAQ}>
        <span>{question}</span>
        <span className={styles.chevron}>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <div className={styles.answer}>{answer}</div>}
    </div>
  );
};

export default FAQItem;