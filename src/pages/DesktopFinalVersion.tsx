import { FunctionComponent } from "react";
import LastCTA from "../components/lastCTA/LastCTA";
import FirstStep from "../components/Step/Step";
import ProblemComponent from "../components/Problem/problemComponent";
import Button from "../components/Button/Button";
import styles from "./DesktopFinalVersion.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Step from "../components/Step/Step";
import FAQItem from "../components/Question/Question";

const DesktopFinalVersion: FunctionComponent = () => {
  return (
    <div className={styles.desktopfinalversion}>

      <div className={styles.firstPage}>
        <Navbar />

        <div className={styles.firstpagecontent}>
          <div className={styles.leftSideFirstPageContent}>
            <h1 className={styles.firstPageTitle}>
              <span>
                <span>{`Un accompagnement sportif `}</span>
                <span className={styles.firstPageTitleDifferentColor}>
                  entièrement personnalisé
                </span>
              </span>
            </h1>

            <div className={styles.textdescription}>
              <div className={styles.firstpagedescription}>
                <p className={styles.classicText}>
                  Une application conçue pour limiter vos risques de blessure, améliorer votre récupération et booster vos performances.
                </p>
              </div>

              <div className={styles.calltoaction}>
                <Button
                  buttonText="Je réserve ma place"
                  icon="/padlock@2x.png"
                  buttonWidth="350px"
                  buttonHeight="60px"
                  className={styles.callToActionButton}
                />
                <div className={styles.ctasubtitle}>
                  <p>
                    Inscription à la file d’attente gratuite en moins d’une minute
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightSideFirstPageContent}>
            <img className={styles.phoneImage} alt="" src="/3dphone@2x.png" />
          </div>
        </div>
      </div>

      <div className={styles.secondPageBackground}>
        <div id="problematique" className={styles.secondpagecontent}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Problématique</h2>
            <div className={styles.subtitles}>
              <span>La </span>
              <i className={styles.boldText}>pratique sportive</i>
              <span> et le </span>
              <i className={styles.boldText}>mode de vie</i>
              <span> moderne posent de nombreux défis pour la santé et le bien-être. </span>
            </div>
          </div>
          <div className={styles.problemContainer}>
            <ProblemComponent
              icon="/back@2x.png"
              title="Douleurs"
              description="Les douleurs persistantes dues à des efforts physiques ou à une mauvaise posture affectent la qualité de vie et les performances sportives."
            />
            <ProblemComponent
              icon="/low-battery@2x.png"
              title="Fatigue"
              description="Une mauvaise récupération peut entraîner une fatigue persistante, une limitation des performances sportives et une augmentation du risque de blessures."
            />
            <ProblemComponent
              icon="/equality@2x.png"
              title="Stagnation"
              description="La stagnation des performances sportives peut démotiver et freiner les progrès malgré les efforts fournis."
            />
            <ProblemComponent
              icon="/patient@2x.png"
              title="Blessures"
              description="Les blessures sportives limitent fortement la progression et interrompent les routines d'entraînement."
            />
            <ProblemComponent
              icon="/workfromhome-1@2x.png"
              title="Sédentarité"
              description="La sédentarité, rester assis ou allongé plus de 4 heures par jour (hors sommeil), réduit la mobilité et affecte négativement la santé et les performances sportives."
            />
          </div>
        </div>
      </div>


      <div className={styles.parentThirdPageContent}>
        <div id="solution" className={styles.thirdpagecontent}>
          <h2 className={styles.title}>La solution ?</h2>
          <div className={styles.thirdpagetextcontent}>
            <div className={styles.solutionDescBold}>
              <b>Fatigue, douleurs et stagnation ne sont plus une fatalité avec </b>
              <i className={styles.feelio}>Feelio</i>
              <b>.</b>
            </div>
            <div className={styles.solutionDescClassic}>
              Grâce à notre intelligence artificielle et nos algorithmes avancés,
              Feelio analyse votre morpho-anatomie pour vous proposer des séances
              sur mesure, avec des exercices adaptés à votre profil et validés par
              des professionnels de la santé.
            </div>
            <b className={styles.solutionDescBold}>
              Optez pour une solution innovante et efficace afin d’améliorer votre
              mobilité, renforcer votre masse musculaire et vous prévenir des
              blessures grâce aux séances Feelio.
            </b>
          </div>
        </div>
      </div>

      <div className={styles.fourthPageContent}>
        <h2 className={styles.title}>Comment ça marche&nbsp;?</h2>

        <div className={styles.stepContainer}>
          <Step
            className={styles.step}
            sportsGymnastics="/sports-gymnastics.svg"
            stepTitle="Renseigner son profil utilisateur"
            stepDesc="Indiquez vos informations personnelles sur votre mode de vie et vos habitudes sportives."
          />

          <Step
            className={styles.step}
            sportsGymnastics="/vector.svg"
            stepTitle="Faire son analyse morpho-anatomique"
            stepDesc="Avec une Intelligence Artificielle et plusieurs exercices nous analysons votre morpho-anatomie complète."
          />

          <Step
            className={styles.step}
            sportsGymnastics="/sentiment-very-satisfied.svg"
            stepTitle="Profiter des séances 100% personnalisées"
            stepDesc="Vous pouvez réaliser des séances quotidiennes et des séances avant et après votre entainement sportif."
          />
        </div>
      </div>

      <div id="FAQ" className={styles.fifthpage}>
        <h2 className={styles.title}>F.A.Q</h2>

        <FAQItem 
          question="Quelle est la politique de retour ?" 
          answer="Vous pouvez retourner votre produit dans les 30 jours suivant l'achat." 
        />
        <FAQItem 
          question="Quels sont les modes de paiement acceptés ?" 
          answer="Nous acceptons les paiements par carte de crédit, PayPal et virement bancaire." 
        />
        <FAQItem 
          question="Quelle est la politique de retour ?" 
          answer="Vous pouvez retourner votre produit dans les 30 jours suivant l'achat." 
        />
        <FAQItem 
          question="Quels sont les modes de paiement acceptés ?" 
          answer="Nous acceptons les paiements par carte de crédit, PayPal et virement bancaire." 
        />
      </div>


      <LastCTA />
      <Footer />
   
    </div>
  );
};

export default DesktopFinalVersion;
