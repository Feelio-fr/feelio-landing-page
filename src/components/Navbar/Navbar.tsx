import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navbar}>
      <img className={styles.logoFeelioIcon1} alt="logo Feelio" src="/logo-feelio@2x.png" />
      <div className={styles.sectionParent}>
        <a className={styles.section} href="#problematique">Problématique</a>
        <a className={styles.section} href="#solution">Solution</a>
        <a className={styles.section} href="#FAQ">F.A.Q</a>
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
          <a className={styles.section} href="#problematique" onClick={toggleMenu}>Problématique</a>
          <hr className={styles.separator} />
          <a className={styles.section} href="#solution" onClick={toggleMenu}>Solution</a>
          <hr className={styles.separator} />
          <a className={styles.section} href="#FAQ" onClick={toggleMenu}>F.A.Q</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
