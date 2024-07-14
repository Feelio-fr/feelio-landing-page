import { FunctionComponent } from "react";
import Button from "../Button/Button";
import styles from "./LastCTA.module.css";
import { motion, Variants } from "framer-motion";

export type LastCTAType = {
  className?: string;
};

const LastCTA: FunctionComponent<LastCTAType> = ({ className = "" }) => {

  // Animation CTA
  const variantsMotionCTA: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4,
        duration: 0.8
      }
    },
  };

  return (
    <div className={styles.lastCtaContent}>
      <div className={styles.lastCtaText}>
        <h3 className={styles.lastCtaTitle}>Optimisez votre bien-être</h3>
        <p className={styles.lastCtaDesc}>Prenez en main votre santé et améliorez votre corps dès aujourd'hui pour en profiter durablement.</p>
      </div>
      
      <motion.div
        variants={variantsMotionCTA}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true}}
      >
        <Button
          buttonText="Je réserve ma place"
          icon="/padlock@2x.png"
          buttonWidth="350px"
          buttonHeight="60px"
        />
      </motion.div>
    </div>
  );
};

export default LastCTA;
