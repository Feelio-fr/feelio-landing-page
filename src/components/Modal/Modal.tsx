import { FunctionComponent, useEffect, useState } from "react";
import styles from "./Modal.module.css";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  handleSuccess: (message: string) => void;
  handleError: (message: string) => void;
  setLoading: (loading: boolean) => void;
};

const Modal: FunctionComponent<ModalProps> = ({ isOpen, onClose, handleSuccess, handleError, setLoading }) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Vérifie si le clic est effectué sur l'overlay et non sur le contenu de la modal
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://ru5hqfk2eg.execute-api.eu-west-3.amazonaws.com/prod/signup-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName })
      });
      const data = await response.json();
      if (response.ok) {
        handleSuccess(data.message);
      } else {
        handleError("Une erreur est survenue");
        throw new Error(data.message || 'Une erreur est survenue');
      }
    } catch (error : any) {
      handleError(error.message); 
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
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
          <div className={styles.inputWrapper}>
            <input
              type="text"
              className={`${styles.input} ${styles.inputFirstName}`}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onFocus={() => setIsFirstNameFocused(true)}
              onBlur={() => setIsFirstNameFocused(false)}
              required
              placeholder=" " 
            />
            <label className={`${styles.label} ${(isFirstNameFocused || firstName) ? styles.labelFilled : ''}`}>Prénom</label>
          </div>
          <div className={styles.inputWrapper}>
            <input
              type="email"
              className={`${styles.input} ${styles.inputEmail}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
              required
              placeholder=" "
            />
            <label className={`${styles.label} ${(isEmailFocused || email) ? styles.labelFilled : ''}`}>Adresse mail</label>
          </div>
        </div>
        <button className={styles.modalButton} onClick={handleSubmit}>
          Je m'inscris
        </button>
      </div>
    </div>
  );
};

export default Modal;
