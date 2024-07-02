import { FunctionComponent } from "react";
import styles from "./Modal.module.css";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: FunctionComponent<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
            &times;
        </button>
        <h2 className={styles.modalTitle}>Inscription</h2>
        <p className={styles.modalDescription}>Veuillez entrer vos informations.</p>
        <input type="text" placeholder="Prénom" className={styles.input} />
        <input type="email" placeholder="Email" className={styles.input} />
        <button className={styles.modalButton} onClick={onClose}>
          Je m'inscris
        </button>
      </div>
    </div>
  );
};

export default Modal;
