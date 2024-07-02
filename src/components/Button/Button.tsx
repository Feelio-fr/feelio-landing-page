import { FunctionComponent, CSSProperties, useState } from "react";
import styles from "./Button.module.css";
import Modal from "../Modal/Modal";

export type ButtonType = {
  className?: string;
  buttonText?: string;
  icon?: string;

  /** Style props */
  buttonWidth?: CSSProperties["width"];
  buttonHeight?: CSSProperties["height"];
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  buttonText = "",
  icon,
  buttonWidth,
  buttonHeight,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const buttonStyle: CSSProperties = {
    width: buttonWidth,
    height: buttonHeight,
  };

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div
        className={`${styles.button} ${className}`}
        style={buttonStyle}
        onClick={handleButtonClick}
      >
        {buttonText && <div className={styles.buttonText}>{buttonText}</div>}
        {icon && <img className={styles.icon} alt="Button icon" src={icon} />}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Button;
