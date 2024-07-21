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
        <a
          href="#problematique"
          className={styles.section}
          onClick={(e) => {
            e.preventDefault(); // Empêche le comportement par défaut du lien
            scrollToSection(problematiqueRef); // Active le défilement en douceur
          }}
        >
          Problématique
        </a>
        <a
          href="#solution"
          className={styles.section}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(solutionRef);
          }}
        >
          Solution
        </a>
        <a
          href="#faq"
          className={styles.section}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(faqRef);
          }}
        >
          F.A.Q
        </a>
        </div>
        <p className={styles.copyrightFeelio}>Copyright ©Feelio {currentYear} </p>
    </div>
  );
};

export default Footer;
