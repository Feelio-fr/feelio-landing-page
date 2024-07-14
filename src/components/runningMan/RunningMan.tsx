import React, { useEffect, useRef, useState } from 'react';
import { motion, useViewportScroll, useTransform, useScroll } from 'framer-motion';
import styles from './RunningMan.module.css';

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
                <img className={styles.runningGuy} src="/runningGuy.png" alt="Homme qui court"></img>
            </motion.div>
        </>
    );
};

export default RunningMan;
