import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
  problematiqueRef: React.RefObject<HTMLDivElement>;
  solutionRef: React.RefObject<HTMLDivElement>;
  faqRef: React.RefObject<HTMLDivElement>;
}

const Footer: React.FC<FooterProps> = ({ problematiqueRef, solutionRef, faqRef }) => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.footer}>
        <div className={styles.footercontent}>
        <img
            className={styles.logoFeelioIcon}
            alt="Logo Feelio"
            src="/logo-feelio@2x.png"
        />
        <a className={styles.section} onClick={() => scrollToSection(problematiqueRef)}>Problématique</a>
        <a className={styles.section} onClick={() => scrollToSection(solutionRef)}>Solution</a>
        <a className={styles.section} onClick={() => scrollToSection(faqRef)}>FAQ</a>
        </div>
        <p className={styles.copyrightFeelio}>Copyright ©Feelio {currentYear} </p>
    </div>
  );
};

export default Footer;
