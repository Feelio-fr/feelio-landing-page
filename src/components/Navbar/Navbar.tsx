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
      {isMenuOpen && (
        <div className={styles.burgerMenuContent}>
          <a className={styles.section} href="#problematique" onClick={toggleMenu}>Problématique</a>
          <a className={styles.section} href="#solution" onClick={toggleMenu}>Solution</a>
          <a className={styles.section} href="#FAQ" onClick={toggleMenu}>F.A.Q</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
