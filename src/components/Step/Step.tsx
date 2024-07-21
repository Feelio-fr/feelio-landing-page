import { FunctionComponent } from "react";
import styles from "./Step.module.css";
import { motion, Variants } from "framer-motion";

export type StepType = {
  className?: string;
  sportsGymnastics?: string;
  stepTitle?: string;
  stepDesc?: string;
  isLast?: boolean;
  isMorpho?: boolean;
  alt?: string;
};

const Step: FunctionComponent<StepType> = ({
  className = "",
  sportsGymnastics,
  stepTitle,
  stepDesc,
  isMorpho = false,
  isLast = false,
  alt,
}) => {

  // Animation 
  const variantsMotion: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        delay: isLast ? 0.8 : isMorpho ? 0.6 : 0.4,
        duration: 0.8
      }
    },
  };

  return (
    <motion.div
      variants={variantsMotion}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true}}
    >
      <div className={`${styles.step} ${className}`}>
        <div className={styles.stepIconContainer}>
          <img className={styles.stepIcon} alt={alt} src={sportsGymnastics} />
        </div>
        {!isLast && <div className={styles.timeline}></div>}
        <div className={styles.stepText}>
          <h3 className={styles.stepTitle}>{stepTitle}</h3>
          <p className={styles.stepDesc}>{stepDesc}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Step;
