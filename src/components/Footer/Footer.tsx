// components/Navbar.tsx

import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
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
        <div className={styles.copyrightFeelio2024}>Copyright ©Feelio 2024</div>
    </div>
  );
};

export default Footer;
