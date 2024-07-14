import { FunctionComponent } from "react";
import styles from "./Step.module.css";

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
  isLast = false,
  alt,
}) => {
  return (
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
  );
};

export default Step;
