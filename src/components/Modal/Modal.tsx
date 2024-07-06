import { FunctionComponent, useEffect } from "react";
import styles from "./Modal.module.css";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: FunctionComponent<ModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.imageContainer}>
          <div className={styles.imageOverlay}>
            <h2 className={styles.overlayTitle}>Inscription à la waitlist</h2>
            <p className={styles.overlayDescription}>
            Inscrivez-vous à la file d'attente pour obtenir un accès anticipé à l'application et découvrir toutes ses fonctionnalités gratuitement avant tout le monde. Vous recevrez un e-mail dès que l'application sera disponible sur les stores.
            </p>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <input type="text" placeholder="Prénom" className={styles.input} />
          <input type="email" placeholder="Adresse mail" className={styles.input} />
        </div>
        <button className={styles.modalButton} onClick={onClose}>
          Je m'inscris
        </button>
      </div>
    </div>
  );
};

export default Modal;
