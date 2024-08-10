import { useEffect, useRef, useState } from 'react';
import { motion, useTransform, useScroll, useMotionValue } from 'framer-motion';
import styles from './RunningMan.module.css';
import skateboardingImage from '../../assets/images/skateboarder.webp';

const RunningMan = () => {
    const refGuy = useRef(null);
    const { scrollYProgress } = useScroll({
        target: refGuy,
    });

    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const animationProgress = useMotionValue(1);
    const [animationFinished, setAnimationFinished] = useState(false);

    const handleResize = () => {
        setWindowSize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((value) => {
            if (value == 1) {
                setAnimationFinished(false);
                return;
            }
            if (value <= animationProgress.get() && !animationFinished) {
                animationProgress.set(value);
                return;
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress, animationProgress, animationFinished]);

    useEffect(() => {
        const unsubscribe = animationProgress.onChange(value => {
            if (value == 0) { // Reset the animation to the beginning
                animationProgress.set(1);
                setAnimationFinished(true);
                return;
            }
        });
        return () => unsubscribe();
    }, [animationProgress]);

    const scrollTransformX = useTransform(animationProgress, [0, 1], [windowSize, -250]);
    const scrollTransformY = useTransform(animationProgress, [0, 1], [70, 0]);

    const windLine1Opacity = useTransform(animationProgress, [0, 0.43, 0.50, 0.57, 1], [0, 0, 1, 0, 0]);
    const windLine2Opacity = useTransform(animationProgress, [0, 0.45, 0.52, 0.59, 1], [0, 0, 1, 0, 0]);
    const windLine3Opacity = useTransform(animationProgress, [0, 0.47, 0.54, 0.61, 1], [0, 0, 1, 0, 0]);

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
