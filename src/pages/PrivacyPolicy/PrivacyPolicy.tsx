import styles from "./PrivacyPolicy.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useRef } from "react";

const PrivacyPolicy = () => {

    // Créer des références pour chaque section
    const problematiqueRef = useRef<HTMLDivElement>(null);
    const solutionRef = useRef<HTMLDivElement>(null);
    const faqRef = useRef<HTMLDivElement>(null);


    return (
        <div className={styles.privacyPolicyPage}>
            <div className={styles.privacyPolicyContent}>
                <Navbar
                    problematiqueRef={problematiqueRef}
                    solutionRef={solutionRef}
                    faqRef={faqRef}
                />

                <h1 className={styles.title}>Politique de confidentialité</h1>
                <h2 className={styles.subtitle}>Dernière mise à jour : 04/08/2024</h2>

                
                <p className={styles.paragraphText}>Cette Politique de Confidentialité décrit Nos politiques et procédures concernant la collecte, l'utilisation et la divulgation de Vos informations lorsque Vous utilisez le Service et Vous informe sur Vos droits en matière de confidentialité et sur la façon dont la loi Vous protège.</p> <br />
                <p className={styles.paragraphText}>Nous utilisons Vos Données personnelles pour fournir et améliorer le Service. En utilisant le Service, Vous acceptez la collecte et l'utilisation d'informations conformément à cette Politique de Confidentialité.</p>
                <h2 className={styles.paragraphBigTitle}>Interprétation et Définitions</h2>
                <h3 className={styles.paragraphTitle}>Interprétation</h3>
                <p className={styles.paragraphText}>Les mots dont la première lettre est en majuscule ont des significations définies dans les conditions suivantes. Les définitions suivantes auront la même signification qu'elles apparaissent au singulier ou au pluriel.</p>
                <h3 className={styles.paragraphTitle}>Définitions</h3>
                <p className={styles.paragraphText}>Aux fins de cette Politique de Confidentialité :</p>
                <ul>
                <li>
                <p className={styles.paragraphText}><strong>Compte</strong> désigne un compte unique créé pour Vous permettre d'accéder à notre Service ou à des parties de notre Service.</p>
                </li>
                <li>
                <p className={styles.paragraphText}><strong>Affilié</strong> désigne une entité qui contrôle, est contrôlée par ou est sous contrôle commun avec une partie, où "contrôle" signifie la propriété de 50 % ou plus des actions, des intérêts en capital ou d'autres titres ayant le droit de vote pour l'élection des administrateurs ou d'une autre autorité de gestion.</p>
                </li>
                <li>
                <p className={styles.paragraphText}><strong>Entreprise</strong> (désignée soit par "l'Entreprise", "Nous", "Notre" ou "Nos" dans cet Accord) désigne Feelio.</p>
                </li>
                <li>
                <p className={styles.paragraphText}><strong>Cookies</strong> sont de petits fichiers qui sont placés sur Votre ordinateur, appareil mobile ou tout autre appareil par un site web, contenant les détails de Votre historique de navigation sur ce site parmi ses nombreuses utilisations.</p>
                </li>
                <li>
                <p className={styles.paragraphText}><strong>Pays</strong> désigne : France</p>
                </li>
                <li>
                <p className={styles.paragraphText}><strong>Appareil</strong> désigne tout appareil pouvant accéder au Service tel qu'un ordinateur, un téléphone portable ou une tablette numérique.</p>
                </li>
                <li>
                <p className={styles.paragraphText}><strong>Données Personnelles</strong> désigne toute information qui se rapporte à un individu identifié ou identifiable.</p>
                </li>
                <li>
                <p className={styles.paragraphText}><strong>Service</strong> désigne le site Web.</p>
                </li>
                <li>
                <p className={styles.paragraphText}><strong>Fournisseur de Services</strong> désigne toute personne physique ou morale qui traite les données pour le compte de l'Entreprise. Il se réfère aux sociétés tierces ou aux individus employés par l'Entreprise pour faciliter le Service, pour fournir le Service au nom de l'Entreprise, pour effectuer des services liés au Service ou pour aider l'Entreprise à analyser comment le Service est utilisé.</p>
                </li>
                <li>
                <p className={styles.paragraphText}><strong>Données d'Utilisation</strong> désigne les données collectées automatiquement, soit générées par l'utilisation du Service ou de l'infrastructure du Service elle-même (par exemple, la durée d'une visite de page).</p>
                </li>
                <li>
                <p className={styles.paragraphText}><strong>Site Web</strong> désigne Feelio, accessible depuis <a href="http://www.feelio.fr/" rel="external nofollow noopener" target="_blank">http://www.feelio.fr/</a></p>
                </li>
                <li>
                <p className={styles.paragraphText}><strong>Vous</strong> désigne la personne accédant ou utilisant le Service, ou l'entreprise, ou autre entité légale au nom de laquelle cette personne accède ou utilise le Service, selon le cas.</p>
                </li>
                </ul>

                <h2 className={styles.paragraphBigTitle}>Collecte et Utilisation de Vos Données Personnelles</h2>
                <h3 className={styles.paragraphTitle}>Types de Données Collectées</h3>
                <h4 className={styles.paragraphSmallTitle}>Données Personnelles</h4>
                <p className={styles.paragraphText}>Lors de l'utilisation de Notre Service, Nous pouvons Vous demander de Nous fournir certaines informations personnellement identifiables qui peuvent être utilisées pour Vous contacter ou Vous identifier. Les informations personnellement identifiables peuvent inclure, sans s'y limiter :</p>
                <ul>
                <li>
                <p className={styles.paragraphText}>Adresse e-mail</p>
                </li>
                <li>
                <p className={styles.paragraphText}>Prénom et nom</p>
                </li>
                <li>
                <p className={styles.paragraphText}>Données d'Utilisation</p>
                </li>
                </ul>
                <h4 className={styles.paragraphSmallTitle}>Données d'Utilisation</h4>
                <p className={styles.paragraphText}>Les Données d'Utilisation sont collectées automatiquement lors de l'utilisation du Service.</p>
                <p className={styles.paragraphText}>Les Données d'Utilisation peuvent inclure des informations telles que l'adresse de protocole Internet (par exemple, adresse IP) de Votre Appareil, le type de navigateur, la version du navigateur, les pages de notre Service que Vous visitez, l'heure et la date de Votre visite, le temps passé sur ces pages, les identifiants uniques de l'appareil et d'autres données de diagnostic.</p>
                <p className={styles.paragraphText}>Lorsque Vous accédez au Service via un appareil mobile, Nous pouvons collecter certaines informations automatiquement, y compris, mais sans s'y limiter, le type d'appareil mobile que Vous utilisez, l'identifiant unique de Votre appareil mobile, l'adresse IP de Votre appareil mobile, Votre système d'exploitation mobile, le type de navigateur Internet mobile que Vous utilisez, les identifiants uniques de l'appareil et d'autres données de diagnostic.</p>
                <p className={styles.paragraphText}>Nous pouvons également collecter des informations que Votre navigateur envoie chaque fois que Vous visitez notre Service ou lorsque Vous accédez au Service via un appareil mobile.</p>
                <h3 className={styles.paragraphTitle}>Utilisation de Vos Données Personnelles</h3>
                <p className={styles.paragraphText}>L'Entreprise peut utiliser les Données Personnelles aux fins suivantes :</p>
                <ul>
                <li>
                <p className={styles.paragraphText}><strong>Pour fournir et maintenir notre Service</strong>, y compris pour surveiller l'utilisation de notre Service.</p>
                </li>
                <li>
                <p className={styles.paragraphText}><strong>Pour gérer Votre Compte :</strong> pour gérer Votre inscription en tant qu'utilisateur du Service. Les Données Personnelles que Vous fournissez peuvent Vous donner accès à différentes fonctionnalités du Service qui sont disponibles pour Vous en tant qu'utilisateur enregistré.</p>
                </li>
                <li>
                <p className={styles.paragraphText}><strong>Pour l'exécution d'un contrat :</strong> le développement, la conformité et l'exécution du contrat d'achat des produits, articles ou services que Vous avez achetés ou de tout autre contrat avec Nous par le biais du Service.</p>
                </li>
                <li>
                <p className={styles.paragraphText}><strong>Pour Vous contacter :</strong> Pour Vous contacter par e-mail, appels téléphoniques, SMS, ou autres formes équivalentes de communication électronique, telles que les notifications push d'une application mobile concernant les mises à jour ou les communications informatives liées aux fonctionnalités, produits ou services sous contrat, y compris les mises à jour de sécurité, lorsque cela est nécessaire ou raisonnable pour leur mise en œuvre.</p>
                </li>
                <li>
                <p className={styles.paragraphText}><strong>Pour Vous fournir</strong> des nouvelles, des offres spéciales et des informations générales sur d'autres biens, services et événements que nous proposons qui sont similaires à ceux que vous avez déjà achetés ou pour lesquels vous vous êtes renseigné, sauf si Vous avez choisi de ne pas recevoir de telles informations.</p>
                </li>
                <li>
                <p className={styles.paragraphText}><strong>Pour gérer Vos demandes :</strong> Pour répondre et gérer Vos demandes auprès de Nous.</p>
                </li>
                <li>
                <p className={styles.paragraphText}><strong>Pour les transferts d'entreprise :</strong> Nous pouvons utiliser Vos informations pour évaluer ou réaliser une fusion, une cession, une restructuration, une réorganisation, une dissolution, ou une autre vente ou transfert de tout ou partie de Nos actifs, que ce soit dans le cadre d'une entreprise en activité ou dans le cadre d'une faillite, liquidation, ou procédure similaire, dans laquelle les Données Personnelles détenues par Nous sur les utilisateurs de notre Service font partie des actifs transférés.</p>
                </li>
                <li>
                <p className={styles.paragraphText}><strong>À d'autres fins</strong> : Nous pouvons utiliser Vos informations à d'autres fins, telles que l'analyse des données, l'identification des tendances d'utilisation, la détermination de l'efficacité de nos campagnes promotionnelles et pour évaluer et améliorer notre Service, nos produits, services, marketing et votre expérience.</p>
                </li>
                </ul>
                <p className={styles.paragraphText}>Nous pouvons partager Vos informations personnelles dans les situations suivantes :</p>
                <ul>
                <li className={styles.paragraphText}><strong>Avec les Fournisseurs de Services :</strong> Nous pouvons partager Vos informations personnelles avec les Fournisseurs de Services pour surveiller et analyser l'utilisation de notre Service, pour Vous contacter.</li>
                <li className={styles.paragraphText}><strong>Pour les transferts d'entreprise :</strong> Nous pouvons partager ou transférer Vos informations personnelles en relation avec, ou pendant les négociations de, toute fusion, vente d'actifs de l'Entreprise, financement, ou acquisition de tout ou partie de Notre activité par une autre entreprise.</li>
                <li className={styles.paragraphText}><strong>Avec les Affiliés :</strong> Nous pouvons partager Vos informations avec Nos affiliés, auquel cas nous exigerons de ces affiliés qu'ils respectent cette Politique de Confidentialité. Les affiliés incluent Notre société mère et toute autre filiale, partenaire de coentreprise ou autres sociétés que Nous contrôlons ou qui sont sous contrôle commun avec Nous.</li>
                <li className={styles.paragraphText}><strong>Avec les partenaires commerciaux :</strong> Nous pouvons partager Vos informations avec Nos partenaires commerciaux pour Vous offrir certains produits, services ou promotions.</li>
                <li className={styles.paragraphText}><strong>Avec d'autres utilisateurs :</strong> lorsque Vous partagez des informations personnelles ou interagissez autrement dans les espaces publics avec d'autres utilisateurs, ces informations peuvent être vues par tous les utilisateurs et peuvent être diffusées publiquement à l'extérieur.</li>
                <li className={styles.paragraphText}><strong>Avec Votre consentement</strong> : Nous pouvons divulguer Vos informations personnelles à toute autre fin avec Votre consentement.</li>
                </ul>

                <h3 className={styles.paragraphTitle}>Conservation de Vos Données Personnelles</h3>
                <p className={styles.paragraphText}>La Société conservera Vos Données Personnelles uniquement pendant la durée nécessaire aux fins énoncées dans la présente Politique de Confidentialité. Nous conserverons et utiliserons Vos Données Personnelles dans la mesure nécessaire pour nous conformer à nos obligations légales (par exemple, si nous sommes tenus de conserver vos données pour nous conformer aux lois applicables), résoudre les litiges et appliquer nos accords et politiques légaux.</p>
                <p className={styles.paragraphText}>La Société conservera également les Données d'Utilisation à des fins d'analyse interne. Les Données d'Utilisation sont généralement conservées pendant une période plus courte, sauf lorsque ces données sont utilisées pour renforcer la sécurité ou améliorer la fonctionnalité de Notre Service, ou lorsque nous sommes légalement obligés de conserver ces données pendant des périodes plus longues.</p>
                <h3 className={styles.paragraphTitle}>Transfert de Vos Données Personnelles</h3>
                <p className={styles.paragraphText}>Vos informations, y compris les Données Personnelles, sont traitées dans les bureaux d'exploitation de la Société et en tout autre lieu où se trouvent les parties impliquées dans le traitement. Cela signifie que ces informations peuvent être transférées à — et maintenues sur — des ordinateurs situés en dehors de votre état, province, pays ou autre juridiction gouvernementale où les lois de protection des données peuvent différer de celles de votre juridiction.</p>
                <p className={styles.paragraphText}>Votre consentement à cette Politique de Confidentialité suivi de votre soumission de telles informations représente votre accord à ce transfert.</p>
                <p className={styles.paragraphText}>La Société prendra toutes les mesures raisonnablement nécessaires pour garantir que vos données sont traitées en toute sécurité et conformément à cette Politique de Confidentialité et aucun transfert de Vos Données Personnelles n'aura lieu vers une organisation ou un pays, sauf s'il existe des contrôles adéquats en place, y compris la sécurité de vos données et d'autres informations personnelles.</p>
                <h3 className={styles.paragraphTitle}>Suppression de Vos Données Personnelles</h3>
                <p className={styles.paragraphText}>Vous avez le droit de supprimer ou de demander que Nous assistions à supprimer les Données Personnelles que Nous avons collectées à votre sujet.</p>
                <p className={styles.paragraphText}>Notre Service peut Vous donner la possibilité de supprimer certaines informations Vous concernant à partir du Service.</p>
                <p className={styles.paragraphText}>Vous pouvez mettre à jour, modifier ou supprimer vos informations à tout moment en vous connectant à Votre Compte, si vous en avez un, et en visitant la section des paramètres du compte qui vous permet de gérer Vos informations personnelles. Vous pouvez également Nous contacter pour demander l'accès à, corriger ou supprimer toute information personnelle que Vous Nous avez fournie.</p>
                <p className={styles.paragraphText}>Veuillez noter, cependant, que Nous pouvons avoir besoin de conserver certaines informations lorsque nous avons une obligation légale ou une base légale pour le faire.</p>
                <h3 className={styles.paragraphTitle}>Divulgation de Vos Données Personnelles</h3>
                <h4 className={styles.paragraphSmallTitle}>Transactions Commerciales</h4>
                <p className={styles.paragraphText}>Si la Société est impliquée dans une fusion, acquisition ou vente d'actifs, Vos Données Personnelles peuvent être transférées. Nous vous informerons avant que Vos Données Personnelles ne soient transférées et soumises à une autre Politique de Confidentialité.</p>
                <h4 className={styles.paragraphSmallTitle}>Application de la Loi</h4>
                <p className={styles.paragraphText}>Dans certaines circonstances, la Société peut être tenue de divulguer Vos Données Personnelles si cela est requis par la loi ou en réponse à des demandes valides des autorités publiques (par exemple, un tribunal ou une agence gouvernementale).</p>
                <h4 className={styles.paragraphSmallTitle}>Autres Obligations Légales</h4>
                <p className={styles.paragraphText}>La Société peut divulguer Vos Données Personnelles en croyant de bonne foi qu'une telle action est nécessaire pour :</p>
                <ul>
                <li className={styles.paragraphText}>Se conformer à une obligation légale</li>
                <li className={styles.paragraphText}>Protéger et défendre les droits ou la propriété de la Société</li>
                <li className={styles.paragraphText}>Prévenir ou enquêter sur d'éventuels actes répréhensibles en relation avec le Service</li>
                <li className={styles.paragraphText}>Protéger la sécurité personnelle des utilisateurs du Service ou du public</li>
                <li className={styles.paragraphText}>Se protéger contre la responsabilité légale</li>
                </ul>
                <h3 className={styles.paragraphTitle}>Sécurité de Vos Données Personnelles</h3>
                <p className={styles.paragraphText}>La sécurité de Vos Données Personnelles est importante pour Nous, mais rappelez-vous qu'aucune méthode de transmission sur Internet ou méthode de stockage électronique n'est 100 % sécurisée. Bien que Nous nous efforcions d'utiliser des moyens commercialement acceptables pour protéger Vos Données Personnelles, Nous ne pouvons garantir leur sécurité absolue.</p>
                <h2 className={styles.paragraphBigTitle}>Confidentialité des Enfants</h2>
                <p className={styles.paragraphText}>Notre Service ne s'adresse à personne de moins de 13 ans. Nous ne collectons pas sciemment des informations personnellement identifiables auprès de personnes de moins de 13 ans. Si Vous êtes un parent ou un tuteur et que Vous savez que Votre enfant Nous a fourni des Données Personnelles, veuillez Nous contacter. Si Nous prenons connaissance que Nous avons collecté des Données Personnelles auprès de personnes de moins de 13 ans sans vérification du consentement parental, Nous prenons des mesures pour supprimer ces informations de Nos serveurs.</p>
                <p className={styles.paragraphText}>Si Nous devons nous appuyer sur le consentement comme base légale pour traiter Vos informations et que Votre pays exige le consentement d'un parent, Nous pouvons exiger le consentement de Vos parents avant de collecter et d'utiliser ces informations.</p>
                <h2 className={styles.paragraphBigTitle}>Liens vers D'autres Sites Web</h2>
                <p className={styles.paragraphText}>Notre Service peut contenir des liens vers d'autres sites web qui ne sont pas exploités par Nous. Si Vous cliquez sur un lien tiers, Vous serez dirigé vers ce site tiers. Nous Vous conseillons vivement de consulter la Politique de Confidentialité de chaque site que Vous visitez.</p>
                <p className={styles.paragraphText}>Nous n'avons aucun contrôle sur et n'assumons aucune responsabilité pour le contenu, les politiques de confidentialité ou les pratiques des sites ou services tiers.</p>
                <h2 className={styles.paragraphBigTitle}>Modifications de cette Politique de Confidentialité</h2>
                <p className={styles.paragraphText}>Nous pouvons mettre à jour Notre Politique de Confidentialité de temps à autre. Nous Vous informerons de tout changement en publiant la nouvelle Politique de Confidentialité sur cette page.</p>
                <p className={styles.paragraphText}>Vous êtes conseillé de consulter périodiquement cette Politique de Confidentialité pour tout changement. Les modifications de cette Politique de Confidentialité sont effectives lorsqu'elles sont publiées sur cette page.</p>
                <h2 className={styles.paragraphBigTitle}>Nous Contacter</h2>
                <p className={styles.paragraphText}>Si vous avez des questions concernant cette Politique de Confidentialité, Vous pouvez nous contacter :</p>
                <ul>
                <li className={styles.paragraphText}>Par e-mail : contact@feelio.fr</li>
                </ul>


            </div>
            <Footer 
                problematiqueRef={problematiqueRef}
                solutionRef={solutionRef}
                faqRef={faqRef}
            />
        </div>
    );
};

export default PrivacyPolicy;