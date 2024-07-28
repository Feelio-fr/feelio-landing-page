import { useEffect, useRef, useState } from 'react';
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
    
    const scrollTransformX = useTransform(scrollYProgress, [0, 1], [windowSize , -200 ]);
    const scrollTransformY = useTransform(scrollYProgress, [0, 1], [70, 0]);

    const windLine1Opacity = useTransform(scrollYProgress, [0, 0.45, 0.50, 0.55, 1], [0, 0, 1, 0, 0]);
    const windLine2Opacity = useTransform(scrollYProgress, [0, 0.47, 0.52, 0.57, 1], [0, 0, 1, 0, 0]);
    const windLine3Opacity = useTransform(scrollYProgress, [0, 0.49, 0.54, 0.59, 1], [0, 0, 1, 0, 0]);

    return (
        <motion.div
            className={styles.runningManContainer}
            style={{
                x: scrollTransformX,
                y: scrollTransformY,
            }}
            ref={refGuy}
        >
            <div className={styles.runningMan}>
                <div className={styles.windLines}>
                    <motion.div className={styles.windLine} id={styles.windLine1} style={{ opacity: windLine1Opacity }}></motion.div>
                    <motion.div className={styles.windLine} id={styles.windLine2} style={{ opacity: windLine2Opacity }}></motion.div>
                    <motion.div className={styles.windLine} id={styles.windLine3} style={{ opacity: windLine3Opacity }}></motion.div>
                </div>
                <img src={skateboardingImage} alt="Quelqu'un qui fait du skateboard" className={styles.skateboardingImage} />
            </div>
        </motion.div>
    );
};

export default RunningMan;
