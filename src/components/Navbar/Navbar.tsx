// Navbar.tsx
import React, {useState} from 'react';
import styles from './Navbar.module.css';

interface NavbarProps {
  problematiqueRef: React.RefObject<HTMLDivElement>;
  solutionRef: React.RefObject<HTMLDivElement>;
  faqRef: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({ problematiqueRef, solutionRef, faqRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.navbar}>
      <img className={styles.logoFeelioIcon1} alt="logo Feelio" src="/logo-feelio@2x.png" />
      <div className={styles.sectionParent}>
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
      <div className={styles.burgerMenu} onClick={toggleMenu}>
        ☰
      </div>
      <div className={`${styles.burgerMenuContent} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.burgerMenuHeader}>
          <img className={styles.logoFeelioIcon1} alt="logo Feelio" src="/logo-feelio@2x.png" />
          <div className={styles.closeMenu} onClick={toggleMenu}>✕</div>
        </div>
        <div className={styles.burgerMenuLinks}>
          <a className={styles.section} onClick={() => scrollToSection(problematiqueRef)}>Problématique</a>
          <hr className={styles.separator} />
          <a className={styles.section} onClick={() => scrollToSection(solutionRef)}>Solution</a>
          <hr className={styles.separator} />
          <a className={styles.section} onClick={() => scrollToSection(faqRef)}>F.A.Q</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
