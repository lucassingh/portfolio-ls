'use-client'
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './style.module.scss';

const Paragraph = ({ value }) => {

    const element = useRef(null);

    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.9', 'start 0.25']
    })

    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (e) => {
            console.log(e);
        });

        return () => {
            unsubscribe();
        };
    }, [scrollYProgress]);


    return (
        <div className={styles.paragraphWrapper}>
            <motion.h2
                ref={element}
                style={{ opacity: scrollYProgress }}
                className={styles.paragraph} >
                {value}
            </motion.h2>
        </div>
    )
}

export default Paragraph