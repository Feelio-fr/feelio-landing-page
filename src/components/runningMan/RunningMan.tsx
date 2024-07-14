import React, { useEffect, useRef, useState } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import styles from './RunningMan.module.css';
import skateboardingImage from '../../assets/runningGuy/skateboarding2.png';

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
    
    const scrollTransformX = useTransform(scrollYProgress, [0, 1], [windowSize / 2 , -windowSize / 2 - 200]);

    return (
        <motion.div
            className={styles.runningManContainer}
            style={{
                x: scrollTransformX,
            }}
            ref={refGuy}
        >
            <div className={styles.runningMan}>
                <img src={skateboardingImage} alt="Quelqu'un qui fait du skateboard" className={styles.skateboardingImage} />
            </div>
        </motion.div>
    );
};

export default RunningMan;
