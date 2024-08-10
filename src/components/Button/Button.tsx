import { FunctionComponent, CSSProperties, useState } from "react";
import styles from "./Button.module.css";
import Modal from "../Modal/Modal";
import Snackbar from "@mui/material/Snackbar/Snackbar";
import Alert from "@mui/material/Alert/Alert";
import { AlertInfo, Severity } from "../../types/Alert";

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

  const [alertInfo, setAlertInfo] = useState<AlertInfo>({ type: undefined, message: "" });

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSuccess = (message: string) => {
    setAlertInfo({ type: Severity.Success, message });
    closeModal();
  };


  const handleCloseAlert = () => {
    setAlertInfo({ type: undefined, message: "" });
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
      <Modal isOpen={isModalOpen} onClose={closeModal} handleSuccess={handleSuccess} />
      <Snackbar 
          open={!!alertInfo.message} 
          autoHideDuration={6000} 
          onClose={handleCloseAlert}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          sx={{ width: '96%' }}
        >
          <Alert onClose={handleCloseAlert} severity={alertInfo.type} sx={{ width: '80%' }}>
            {alertInfo.message}
          </Alert>
        </Snackbar>
    </>
  );
};

export default Button;
