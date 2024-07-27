// DesktopFinalVersion.tsx
import { FunctionComponent, useRef } from "react";
import LastCTA from "../components/lastCTA/LastCTA";
import ProblemComponent from "../components/Problem/problemComponent";
import Button from "../components/Button/Button";
import styles from "./DesktopFinalVersion.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Step from "../components/Step/Step";
import FAQItem from "../components/Question/Question";
import RunningMan from "../components/runningMan/RunningMan";
import { motion, Variants } from "framer-motion";

const DesktopFinalVersion: FunctionComponent = () => {
  // Créer des références pour chaque section
  const problematiqueRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  // Animation title
  const variantsMotionTitle: Variants = {
    offscreen: {
      opacity: 0,
      x: -200
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.5
      }
    },
  };

  // Animation description + CTA
  const variantsMotionDescAndCTA: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4,
        duration: 0.8
      }
    },
  };

  return (
    <div className={styles.desktopfinalversion}>
      <div className={styles.firstPage}>
        {/* Passer les références à la Navbar */}
        <Navbar
          problematiqueRef={problematiqueRef}
          solutionRef={solutionRef}
          faqRef={faqRef}
        />

        <div className={styles.firstpagecontent}>
          <div className={styles.leftSideFirstPageContent}>
            <motion.div
              variants={variantsMotionTitle}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
            >
              <h1 className={styles.firstPageTitle}>
                {`Un accompagnement sportif `}
                <span className={styles.firstPageTitleDifferentColor}>
                  entièrement personnalisé
                </span>
              </h1>
            </motion.div>

            <motion.div
              variants={variantsMotionDescAndCTA}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
            >
              <div className={styles.textdescription}>
                <div className={styles.firstpagedescription}>
                  <p className={styles.classicText}>
                    Une application conçue pour <span>limiter vos risques de blessure</span>, <span>améliorer votre récupération</span> et <span>booster vos performances</span>.
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
            </motion.div>
          </div>
          <div className={styles.rightSideFirstPageContent}>
            <img className={styles.phoneImage} alt="Phone Image 3D representing Feelio Application" src="/3dphone@2x.webp" />
          </div>
        </div>
      </div>

      <div id="problematique" ref={problematiqueRef} className={styles.secondPageBackground}>
        <div className={styles.secondpagecontent}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Problématique</h2>
            <h3 className={styles.subtitles}>
              <span>La </span>
              <i className={styles.boldText}>pratique sportive</i>
              <span> et le </span>
              <i className={styles.boldText}>mode de vie</i>
              <span> moderne posent de nombreux défis pour la santé et le bien-être. </span>
            </h3>
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

      <div id="solution" ref={solutionRef} className={styles.parentThirdPageContent}>
        <div className={styles.thirdpagecontent}>
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
          <RunningMan />
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
            alt="Quelqu'un qui fait du sport"
          />
          <Step
            className={styles.step}
            sportsGymnastics="/vector.svg"
            stepTitle="Faire son analyse morpho-anatomique"
            stepDesc="Avec une Intelligence Artificielle et plusieurs exercices nous analysons votre morpho-anatomie complète."
            isMorpho={true}
            alt="Analyse d'un individu"
          />
          <Step
            className={styles.step}
            sportsGymnastics="/sentiment-very-satisfied.svg"
            stepTitle="Profiter des séances 100% personnalisées"
            stepDesc="Vous pouvez réaliser des séances quotidiennes et des séances avant et après votre entaînement sportif."
            isLast={true}
            alt="Quelqu'un qui sourit"
          />
        </div>
      </div>

      <div id="FAQ" ref={faqRef} className={styles.fifthpage}>
        <h2 className={styles.title}>F.A.Q</h2>
        <FAQItem
          question="Est-ce que Feelio convient à tous les niveaux sportifs&nbsp;?"
          answer="Feelio utilise une intelligence artificielle avancée pour analyser votre morpho-anatomie et vos habitudes sportives. En fonction de ces données, nous vous proposons des séances d'entraînement sur mesure adaptées à vos besoins et objectifs spécifiques."
        />
        <FAQItem
          question="Quels types d'exercices sont inclus dans les séances Feelio&nbsp;?"
          answer="Les séances Feelio incluent une variété d'exercices allant du renforcement musculaire au travail de mobilité, en passant par des exercices de récupération et de prévention des blessures."
        />
        <FAQItem
          question="Puis-je utiliser Feelio en complément d'un autre programme d'entraînement&nbsp;?"
          answer="Absolument. Feelio peut compléter votre programme d'entraînement actuel en vous offrant des séances de récupération et des exercices spécifiques pour améliorer vos performances et prévenir les blessures."
        />
        <FAQItem
          question="Les séances Feelio sont elles validées par des experts de la santé&nbsp;?"
          answer="Feelio collabore étroitement avec des professionnels de la santé pour garantir que chaque séance d'entraînement est sûre et efficace. Nos algorithmes et exercices sont validés par des experts en médecine du sport pour vous offrir un accompagnement sportif de la plus haute qualité."
        />
        <FAQItem
          question="Combien de temps durent les séances Feelio&nbsp;?"
          answer="Feelio propose des séances de différentes durées pour s’adapter à votre emploi du temps. Vous pouvez choisir des séances courtes de 10 à 15 minutes ou des sessions plus longues allant jusqu’à 60 minutes selon vos disponibilités et vos objectifs."
        />
        <FAQItem
          question="Quels équipements sont nécessaires pour suivre les séances Feelio&nbsp;?"
          answer="Feelio est très flexible. Vous pouvez indiquer le matériel que vous avez à disposition, et nos séances s'adapteront en conséquence. De plus, de nombreux exercices peuvent être réalisés sans aucun équipement, vous permettant de vous entraîner où que vous soyez."
        />
      </div>

      <LastCTA />
      <Footer
        problematiqueRef={problematiqueRef}
        solutionRef={solutionRef}
        faqRef={faqRef}
      />
    </div>
  );
};

export default DesktopFinalVersion;
