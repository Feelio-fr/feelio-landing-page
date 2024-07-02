import { FunctionComponent } from "react";
import Button from "../Button/Button";
import styles from "./LastCTA.module.css";

export type LastCTAType = {
  className?: string;
};

const LastCTA: FunctionComponent<LastCTAType> = ({ className = "" }) => {
  return (
    <div className={styles.lastCtaContent}>
      <div className={styles.lastCtaText}>
        <h3 className={styles.lastCtaTitle}>Optimisez votre bien-être</h3>
        <p className={styles.lastCtaDesc}>Prenez en main votre santé et améliorez votre corps dès aujourd'hui pour en profiter durablement.</p>
      </div>
      
        <Button
          buttonText="Je réserve ma place"
          icon="/padlock@2x.png"
          buttonWidth="350px"
          buttonHeight="60px"
        />
    </div>
  );
};

export default LastCTA;
