// DesktopFinalVersion.tsx
import { FunctionComponent, useRef } from "react";
import LastCTA from "../../components/lastCTA/LastCTA";
import ProblemComponent from "../../components/Problem/problemComponent";
import Button from "../../components/Button/Button";
import styles from "./Homepage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Step from "../../components/Step/Step";
import FAQItem from "../../components/Question/Question";
import RunningMan from "../../components/runningMan/RunningMan";
import { motion, Variants } from "framer-motion";

const Homepage: FunctionComponent = () => {
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
                {`Un accompagnement bien-être `}
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
                    Une application conçue pour <span>améliorer votre mobilité</span>, <span>stimuler votre vitalité</span>, et <span>retrouver votre énergie</span>.
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
            <h2 className={styles.title}>Problématiques</h2>
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
              icon="/hourglass.png"
              title="Manque de temps"
              description="Le rythme de vie moderne laisse peu de temps pour des activités physiques régulières."
            />
            <ProblemComponent
              icon="/back@2x.png"
              title="Douleurs"
              description="Les douleurs persistantes dues à des efforts physiques ou à une mauvaise posture affectent la qualité de vie et les performances sportives."
            />
              <ProblemComponent
                icon="/workfromhome-1@2x.png"
                title="Sédentarité"
                description="La sédentarité, rester assis ou allongé plus de 4 heures par jour (hors sommeil), réduit la mobilité et affecte négativement la santé."
              />
            <ProblemComponent
              icon="/low-battery@2x.png"
              title="Fatigue"
              description="La fatigue liée au rythme de vie impacte la qualité de vie, rendant chaque effort physique ou mental plus difficile à soutenir."
            />
            <ProblemComponent
              icon="/stress.png"
              title="Démotivation"
              description="Sans accompagnement adapté, il est facile de se sentir perdu, de manquer de repères et de perdre la motivation à poursuivre ses efforts."
            />
          </div>
        </div>
      </div>

      <div id="solution" ref={solutionRef} className={styles.parentThirdPageContent}>
        <div className={styles.thirdpagecontent}>
          <h2 className={styles.title}>La solution ?</h2>
          <div className={styles.thirdpagetextcontent}>
            <div className={styles.solutionDescBold}>
              <b>Fatigue, douleurs et sédentarité ne sont plus une fatalité avec </b>
              <i className={styles.feelio}>Feelio</i>
              <b>.</b>
            </div>
            <div className={styles.solutionDescClassic}>
              Grâce à notre intelligence artificielle et nos algorithmes avancés,
              Feelio analyse votre morpho-anatomie pour vous proposer des séances
              sur mesure, avec des exercices adaptés à votre profil et validés par
              des professionnels du sport et de la santé.
            </div>
            <b className={styles.solutionDescBold}>
            Choisissez Feelio pour des séances qui vous accompagnent dans l’amélioration 
            globale de votre corps, en toute simplicité et à votre rythme.
            </b>
          </div>
        </div>
          <div className={styles.inclinateDiv}>
            <RunningMan />
          </div>
      </div>

      <div className={styles.fourthPageContent}>
        <h2 className={styles.title}>Comment ça marche&nbsp;?</h2>
        <div className={styles.stepContainer}>
          <Step
            className={styles.step}
            sportsGymnastics="/sports-gymnastics.svg"
            stepTitle="Je renseigne mon profil utilisateur"
            stepDesc="J’indique mes informations personnelles, mes habitudes de vie et mes éventuels objectifs."
            alt="Quelqu'un qui fait du sport"
          />
          <Step
            className={styles.step}
            sportsGymnastics="/vector.svg"
            stepTitle="Je fais mon analyse morpho-anatomique"
            stepDesc="J'analyse ma morpho-anatomie avec une intelligence artificielle, en me prenant en vidéo et en réalisant quelques exercices."
            isMorpho={true}
            alt="Analyse d'un individu"
          />
          <Step
            className={styles.step}
            sportsGymnastics="/sentiment-very-satisfied.svg"
            stepTitle="Je profite des séances personnalisées"
            stepDesc="Je peux maintenant réaliser des séances quotidiennes et variées, conçues pour améliorer chaque aspect de mon corps."
            isLast={true}
            alt="Quelqu'un qui sourit"
          />
        </div>
      </div>

      <div id="FAQ" ref={faqRef} className={styles.fifthpage}>
        <h2 className={styles.title}>F.A.Q</h2>
        <FAQItem
          question="Quels types d'exercices sont inclus dans les séances Feelio&nbsp;?"
          answer="Les séances Feelio proposent une variété d'exercices conçus pour développer de manière globale les capacités physiques, allant du renforcement musculaire à la mobilité, en passant par la coordination et la souplesse."
        />
        <FAQItem
          question="Est-ce que Feelio est une application médicale&nbsp;?"
          answer="Non, Feelio n'est pas une application médicale. Nos programmes d'entraînement sont conçus pour améliorer globalement votre bien-être, mais ils ne remplacent en aucun cas les conseils et traitements fournis par des professionnels de la santé."
          />
        <FAQItem
          question="Les séances Feelio sont elles validées par des experts &nbsp;?"
          answer="Feelio collabore étroitement avec des professionnels du sport et de la santé pour garantir que chaque séance est sûre et efficace. Nos algorithmes et exercices sont validés par des experts en médecine du sport pour vous offrir un accompagnement de la plus haute qualité."
        />
        <FAQItem
          question="Puis-je utiliser Feelio en complément d'un autre programme d'entraînement&nbsp;?"
          answer="Absolument. Feelio peut enrichir votre routine d'entraînement en vous proposant des séances adaptées pour renforcer vos points faibles, améliorer votre mobilité et optimiser vos performances."
        />
        <FAQItem
          question="Est-ce que mes vidéos et images sont stockées lors de l'analyse morpho-anatomique&nbsp;?"
          answer="Non, Feelio ne stocke aucune image ni vidéo de votre analyse morpho-anatomique. L'analyse vidéo est effectuée en temps réel pour déterminer vos proportions corporelles en utilisant des points clés tel que les poignets, les genoux, les coudes, les épaules, les chevilles, et autre."
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

export default Homepage;
