import React, { useEffect, useRef, useState } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
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
    
    const scrollTransformX = useTransform(scrollYProgress, [0, 1], [windowSize / 2 , -windowSize / 2 - 150]);
    // Create transformations for 20 rotations
    const armSwing = useTransform(scrollYProgress, 
        Array.from({ length: 21 }, (_, i) => i / 20), 
        Array.from({ length: 21 }, (_, i) => (i % 2 === 0 ? 0 : 20))
    );
    const legRunAbove = useTransform(scrollYProgress, 
        Array.from({ length: 21 }, (_, i) => i / 20), 
        Array.from({ length: 21 }, (_, i) => (i % 2 === 0 ? -20 : 20))
    );
    const legRunBehind = useTransform(scrollYProgress, 
        Array.from({ length: 21 }, (_, i) => i / 20), 
        Array.from({ length: 21 }, (_, i) => (i % 2 === 0 ? 0 : -40))
    );    

    return (
        <motion.div
            className={styles.runningManContainer}
            style={{
                x: scrollTransformX,
            }}
            ref={refGuy}
        >
            <div className={styles.runningMan}>
                <img src={bodyImage} alt="Corps d'un l'homme qui court" className={styles.body} />
                <motion.img
                    src={leftArmImage}
                    alt="Bras gauche"
                    className={styles.leftArm}
                    style={{ rotate: armSwing }}
                />
                <motion.img
                    src={rightArmImage}
                    alt="Bras droit"
                    className={styles.rightArm}
                    style={{ rotate: armSwing }}
                />
                <motion.img
                    src={leftLegImage}
                    alt="Jambe gauche"
                    className={styles.leftLeg}
                    style={{ rotate: legRunBehind }}
                />
                <motion.img
                    src={rightLegImage}
                    alt="Jambe droite"
                    className={styles.rightLeg}
                    style={{ rotate: legRunAbove }}
                />
            </div>
        </motion.div>
    );
};

export default RunningMan;
