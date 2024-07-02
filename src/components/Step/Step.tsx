import { FunctionComponent } from "react";
import styles from "./Step.module.css";

export type StepType = {
  className?: string;
  sportsGymnastics?: string;
  stepTitle?: string;
  stepDesc?: string;
};

const Step: FunctionComponent<StepType> = ({
  className = "",
  sportsGymnastics,
  stepTitle,
  stepDesc,
}) => {
  return (
    <div className={styles.step}>
      <div className={styles.stepIconContainer}>
        <img
          className={styles.stepIcon}
          alt=""
          src={sportsGymnastics}
        />
      </div>
      <div className={styles.stepText}>
        <div className={styles.stepTitle}>{stepTitle}</div>
        <div className={styles.stepDesc}>{stepDesc}</div>
      </div>
    </div>
  );
};

export default Step;
