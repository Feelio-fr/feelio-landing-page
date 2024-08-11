import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./Unsubscribe.module.css";

const Unsubscribe = () => {
  const { token } = useParams();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const unsubscribe = async () => {
      const apiUrl: string = process.env.REACT_APP_API_URL_NON_PROD + 'unsubscription';
      const apiKey: string = process.env.REACT_APP_API_KEY_NON_PROD

      if(!apiUrl || !apiKey) {
        setMessage("Une erreur est survenue. Veuillez nous contacter à l'adresse contact@feelio.fr ou avec la messagerie en bas à droite.");
        setLoading(false);
        return;
      } 

      try {
        const response = await fetch(apiUrl, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
        },
          body: JSON.stringify({ token }),
        });

        if (response.ok) {
          setMessage('Désinscription confirmée.');
        } else {
          if (response.status === 409) {
            setMessage('Vous avez déjà été désinscrit.');
          } else {
            setMessage("Une erreur est survenue. Veuillez nous contacter à l'adresse contact@feelio.fr ou avec la messagerie en bas à droite.");
          }
        }
      } catch (error) {
        setMessage("Une erreur est survenue. Veuillez nous contacter à l'adresse contact@feelio.fr ou avec la messagerie en bas à droite.");
      } finally {
        setLoading(false);
      }
    };

    unsubscribe();
  }, [token]);

  return (
    <div className={styles.unsubscribePage}>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
};

export default Unsubscribe;
