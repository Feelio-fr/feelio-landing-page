// components/Navbar.tsx

import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footer}>
        <div className={styles.footercontent}>
        <img
            className={styles.logoFeelioIcon}
            alt="Logo Feelio"
            src="/logo-feelio@2x.png"
        />
        <a href="#problematique" className={styles.section}>Problématique</a>
        <a href="#solution" className={styles.section}>Solution</a>
        <a href="#FAQ" className={styles.section}>FAQ</a>
        </div>
        <p className={styles.copyrightFeelio}>Copyright ©Feelio {currentYear} </p>
    </div>
  );
};

export default Footer;
