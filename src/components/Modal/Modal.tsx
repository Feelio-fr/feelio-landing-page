import { FunctionComponent, useEffect, useState } from "react";
import styles from "./Modal.module.css";
import Snackbar from "@mui/material/Snackbar/Snackbar";
import Alert from "@mui/material/Alert/Alert";
import { AlertInfo, Severity } from "../../types/Alert";


type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  handleSuccess: (message: string) => void;
};

const Modal: FunctionComponent<ModalProps> = ({ isOpen, onClose, handleSuccess }) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alertInfo, setAlertInfo] = useState<AlertInfo>({ type: undefined, message: "" });


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

  const handleError = (message: string) => {
    setAlertInfo({ type: Severity.Error, message });
  };

  const handleCloseAlert = () => {
    setAlertInfo({ type: undefined, message: "" });
  };

  const isValidEmail = (email: string): boolean => {
    const re = /^[a-zA-Z0-9._%+-À-ÿ]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };  
  
  const isValidName = (name: string): boolean => {
    const re = /^[a-zA-ZÀ-ÿ\-]+$/;
    return re.test(name);
  };


  const handleSubmit = async () => {
    setLoading(true);
    const errorMessage = "Une erreur est survenue. Veuillez réessayer plus tard."

    if(!isValidEmail(email) && !isValidName(firstName)) {
      handleError("Prénom et adresse mail invalides.");
      setLoading(false);
      return;
    }

    if(!isValidEmail(email)) {
      handleError("Adresse mail invalide.");
      setLoading(false);
      return;
    }

    if(!isValidName(firstName)) {
      handleError("Prénom invalide.");
      setLoading(false);
      return;
    }

    const apiUrl: string = process.env.REACT_APP_API_URL_PROD + "signup-waitlist";
    const apiKey: string = process.env.REACT_APP_API_KEY_PROD

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
        handleSuccess("Inscription à la waitlist validée ! Vous allez recevoir un mail de confirmation (vérifiez vos spams).");
      } else {
        handleError(errorMessage);
        throw new Error(errorMessage);
      }
    } catch (error : any) {
      console.log(error)
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
        <button className={styles.modalButton} onClick={handleSubmit} disabled={loading} style={{ opacity: loading ? 0.5 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}>
          Je m'inscris
        </button>

        <Snackbar 
          open={!!alertInfo.message} 
          autoHideDuration={6000} 
          onClose={handleCloseAlert}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          sx={{ width: '96%' }}
        >
          <Alert onClose={handleCloseAlert} severity={alertInfo.type} sx={{ width: '41.75rem' }}>
            {alertInfo.message}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Modal;
