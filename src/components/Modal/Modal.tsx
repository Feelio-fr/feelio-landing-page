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

  const isValidEmail = (email: string): boolean => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };
  
  const isValidName = (name: string): boolean => {
    const re = /^[a-zA-Z]+$/;
    return re.test(name);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const errorMessage = "Une erreur est survenue. Veuillez réessayer plus tard."

    // Check format firstname and email
    if(!isValidEmail(email) || !isValidName(firstName)) {
      handleError("Prénom ou Adresse mail invalide.");
      setLoading(false);
      return;
    }

    const apiUrl: string = process.env.REACT_APP_API_URL_NON_PROD
    const apiKey: string = process.env.REACT_APP_API_KEY_NON_PROD
    if(!apiUrl || !apiKey) {
      handleError(errorMessage);
      setLoading(false);
      return;
    } 

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey
        },
        body: JSON.stringify({ email, firstName })
      });
      if (response.ok) {
        handleSuccess("Inscription validée à la waitlist !");
      } else {
        handleError(errorMessage);
        throw new Error(errorMessage);
      }
    } catch (error : any) {
      handleError(errorMessage); 
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
