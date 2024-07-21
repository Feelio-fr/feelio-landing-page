import { useState } from 'react';
import styles from './Question.module.css';

const FAQItem = ({ question, answer, isLast = false }: { question: string, answer: string, isLast?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.faqItem} id={isLast ? styles.lastQuestion : ""}>
      <div className={styles.question} onClick={toggleFAQ}>
        <p>{question}</p>
        <span className={styles.chevron}>
          <img src={isOpen ? "/up-arrows.png" : "/down-arrows.png"} alt={isOpen ? "Up Arrow" : "Down Arrow"} />
        </span>
      </div>
      {isOpen && <p className={styles.answer}>{answer}</p>}
    </div>
  );
};

export default FAQItem;