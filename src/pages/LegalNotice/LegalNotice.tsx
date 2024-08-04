import styles from "./LegalNotice.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useRef } from "react";

const LegalNotice = () => {

    // Créer des références pour chaque section
    const problematiqueRef = useRef<HTMLDivElement>(null);
    const solutionRef = useRef<HTMLDivElement>(null);
    const faqRef = useRef<HTMLDivElement>(null);


    return (
        <div className={styles.legalNoticePage}>
            <div className={styles.legalNoticeContent}>
                <Navbar
                    problematiqueRef={problematiqueRef}
                    solutionRef={solutionRef}
                    faqRef={faqRef}
                />

                <h1 className={styles.title}>Mentions légales</h1>
                <h2 className={styles.subtitle}>Dernière mise à jour : 04/08/2024</h2>

                <p className={styles.paragraphText}>
                    Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site Feelio l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
                </p>

                <h3 className={styles.paragraphTitle}>Edition du site</h3>
                <p className={styles.paragraphText}>
                    Le présent site, accessible à l’URL http://www.feelio.fr (désigné par la suite comme le « Site »), est édité par :

                    Nathan BELLUS, résidant 372 Route de mende 34090 Montpellier, de nationalité Française (France), né(e) le 04/07/2002,
                </p>
                <h3 className={styles.paragraphTitle}>Hébergement</h3>
                <p className={styles.paragraphText}>
                    Le Site est hébergé par la société Netlify, situé 2325 3rd St, Suite 215 San Francisco, CA 94107, (contact téléphonique ou email : +14156911573).
                </p>

                <h3 className={styles.paragraphTitle}>Directeur de publication</h3>
                <p className={styles.paragraphText}>
                    Le Directeur de la publication du Site est Nathan BELLUS.
                </p>

                <h3 className={styles.paragraphTitle}>Nous contacter</h3>
                <p className={styles.paragraphText}>
                    Par téléphone : +33683788130

                    Par email : contact@feelio.fr

                    Par courrier : 372 Route de mende 34090 Montpellier
                </p>

                <h3 className={styles.paragraphTitle}>Données personnelles</h3>
                <p className={styles.paragraphText}>
                    Le traitement de vos données à caractère personnel est régi par notre Charte du respect de la vie privée, disponible depuis la section "Charte de Protection des Données Personnelles", conformément au Règlement Général sur la Protection des Données 2016/679 du 27 avril 2016 («RGPD»).
                </p>
            </div>
            <Footer 
                problematiqueRef={problematiqueRef}
                solutionRef={solutionRef}
                faqRef={faqRef}
            />
        </div>
    );
};

export default LegalNotice;