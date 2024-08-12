import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  problematiqueRef: React.RefObject<HTMLDivElement>;
  solutionRef: React.RefObject<HTMLDivElement>;
  faqRef: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({ problematiqueRef, solutionRef, faqRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
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
    <div className={styles.navbar}>
      <Link to="/">
        <img className={styles.logoFeelioIcon1} alt="logo Feelio" src="/logo-feelio@2x.png" />
      </Link>
      <div className={styles.sectionParent}>
        <a
          href="#problematique"
          className={styles.section}
          onClick={(e) => {
            e.preventDefault();
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
      <div className={styles.burgerMenu} onClick={toggleMenu}>
        ☰
      </div>
      <div className={`${styles.burgerMenuContent} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.burgerMenuHeader}>
          <img className={styles.logoFeelioIcon1} alt="logo Feelio" src="/logo-feelio@2x.png" />
          <div className={styles.closeMenu} onClick={toggleMenu}>✕</div>
        </div>
        <div className={styles.burgerMenuLinks}>
          <a
            href="#problematique"
            className={styles.section}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation(problematiqueRef, '/');
            }}
          >
            Problématiques
          </a>
          <hr className={styles.separator} />
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
          <hr className={styles.separator} />
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
    </div>
  );
};

export default Navbar;
