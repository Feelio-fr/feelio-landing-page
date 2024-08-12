import React from 'react';
import { Link } from 'react-router-dom';
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

  const scrollToTopAndNavigate = (path: string) => {
    window.location.href = path; // Navigate to the new page
    window.scrollTo(0, 0); // Scroll to top
  };

  const handleNavigation = (sectionRef: React.RefObject<HTMLDivElement>, path: string) => {
    if (location.pathname === path) {
      scrollToSection(sectionRef);
    } else {
      // Change route, the ref scroll logic will be handled when the component loads
      window.location.href = `${path}?scrollTo=${sectionRef.current?.id}`;
    }
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerPageLink}>
        <Link to="/">
          <img
              className={styles.logoFeelioIcon}
              alt="Logo Feelio"
              src="/logo-feelio@2x.png"
          />
        </Link>
        <a
          href="#problematique"
          className={styles.section}
          onClick={(e) => {
            e.preventDefault(); // Empêche le comportement par défaut du lien
            handleNavigation(problematiqueRef, '/');
          }}
        >
          Problématiques
        </a>
        <a
          href="#solution"
          className={styles.section}
          onClick={(e) => {
            e.preventDefault();
            handleNavigation(solutionRef, '/');
          }}
        >
          Solution
        </a>
        <a
          href="#faq"
          className={styles.section}
          onClick={(e) => {
            e.preventDefault();
            handleNavigation(faqRef, '/');
          }}
        >
          F.A.Q
        </a>
        </div>

        <div className={styles.legalContent}>
          <a
              href="/mentions-legales"
              className={styles.sectionLegal}
              onClick={(e) => {
                e.preventDefault();
                scrollToTopAndNavigate('/mentions-legales');
              }}
            >
              Mentions légales
          </a>
          <a
            href="/politique-de-confidentialite"
            className={styles.sectionLegal}
            onClick={(e) => {
              e.preventDefault();
              scrollToTopAndNavigate('/politique-de-confidentialite');
            }}
          >
            Politique de confidentialité
          </a>
        </div>
      </div>
      <p className={styles.copyrightFeelio}>Copyright ©Feelio {currentYear} </p>
    </div>
  );
};

export default Footer;
