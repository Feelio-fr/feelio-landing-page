import { FunctionComponent } from "react";
import styles from "./problemComponent.module.css";

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
  return (
    <div className={[styles.problemComponent, className].join(" ")}>
      <div className={styles.iconContainer}>
        <img className={styles.icon} alt="" src={icon} />
      </div>
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export default ProblemComponent;
