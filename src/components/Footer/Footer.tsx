import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import instagramIcon from '../../assets/images/instagram-icon.svg';
import linkedinIcon from '../../assets/images/linkedin-icon.svg';
import xIcon from '../../assets/images/x-icon.svg';

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
        <div className={styles.footerSubContent1}>
          <Link to="/">
            <img
                className={styles.logoFeelioIcon}
                alt="Logo Feelio"
                src="/logo-feelio@2x.png"
            />
          </Link>
          <div className={styles.footerPageLink}>
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
        </div>
        <div className={styles.footerSubContent2}>
          <div className={styles.socialMedia}>
            <a href="https://www.linkedin.com/company/feelio-app" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://x.com/feelio_fr" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <img src={xIcon} alt="X" />
            </a>
            <a href="https://www.instagram.com/feelio_app/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <img src={instagramIcon} alt="Instagram" />
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
      </div>
      <p className={styles.copyrightFeelio}>Copyright ©Feelio {currentYear} </p>
    </div>
  );
};

export default Footer;
