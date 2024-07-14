import { FunctionComponent } from "react";
import styles from "./problemComponent.module.css";
import { motion, Variants } from "framer-motion";

export type problemComponentType = {
  className?: string;
  icon?: string;
  title?: string;
  description?: string;
};

const ProblemComponent: FunctionComponent<problemComponentType> = ({
  className = "",
  icon,
  title,
  description,
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
        delay: 0.4,
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
      <div className={[styles.problemComponent, className].join(" ")}>
        <div className={styles.iconContainer}>
          <img className={styles.icon} alt="" src={icon} />
        </div>
        <div className={styles.text}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProblemComponent;
