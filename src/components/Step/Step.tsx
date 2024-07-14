import { FunctionComponent } from "react";
import styles from "./Step.module.css";

export type StepType = {
  className?: string;
  sportsGymnastics?: string;
  stepTitle?: string;
  stepDesc?: string;
  isLast?: boolean; // Add a prop to identify the last step
};

const Step: FunctionComponent<StepType> = ({
  className = "",
  sportsGymnastics,
  stepTitle,
  stepDesc,
  isLast = false,
}) => {
  return (
    <div className={`${styles.step} ${className}`}>
      <div className={styles.stepIconContainer}>
        <img className={styles.stepIcon} alt="" src={sportsGymnastics} />
      </div>
      {!isLast && <div className={styles.timeline}></div>}
      <div className={styles.stepText}>
        <div className={styles.stepTitle}>{stepTitle}</div>
        <div className={styles.stepDesc}>{stepDesc}</div>
      </div>
    </div>
  );
};

export default Step;
