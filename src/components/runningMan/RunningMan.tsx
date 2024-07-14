import React, { useEffect, useRef, useState } from 'react';
import { motion, useViewportScroll, useTransform, useScroll } from 'framer-motion';
import styles from './RunningMan.module.css';
import bodyImage from '../../assets/runningGuy/body2.png';
import leftLegImage from '../../assets/runningGuy/leftLeg2.png';
import leftArmImage from '../../assets/runningGuy/leftArm.png';
import rightLegImage from '../../assets/runningGuy/rightLeg2.png';
import rightArmImage from '../../assets/runningGuy/rightArm.png'; 

const RunningMan = () => {

    const refGuy = useRef(null);
    const { scrollYProgress } = useScroll({
        target: refGuy,
    });

    const [windowSize, setWindowSize] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    
    const scrollTransformX = useTransform(scrollYProgress, [0, 1], [windowSize / 2 +50, -windowSize / 2 -50]);

    return (
        <>
            <motion.div
                className={styles.runningManContainer}
                style={{
                    x: scrollTransformX,
                }}
                ref={refGuy}
            >
                <img src={bodyImage} alt="Corps d'un l'homme qui court" className={styles.body} />
                <img src={leftLegImage} alt="Jambe gauche" className={styles.leftLeg} />
                <img src={leftArmImage} alt="Bras gauche" className={styles.leftArm} />
                <img src={rightLegImage} alt="Jambe droite" className={styles.rightLeg} />
                <img src={rightArmImage} alt="Bras droit" className={styles.rightArm} />
            </motion.div>
        </>
    );
};

export default RunningMan;
