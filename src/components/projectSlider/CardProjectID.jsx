'use client'

import { useRef } from 'react';
import styles from './cardPro.module.scss'
import { motion } from 'framer-motion';

export const CardProjectID = ({ i, title, subtitle, text1, bgColor }) => {

    const container = useRef();

    return (
        <motion.div ref={container} className={styles.card} style={{ top: `calc(0% + ${i * 8}rem)` }} >
            <div className={styles.cardInner} style={{ backgroundColor: bgColor }}>
                <div className={styles.cardContent}>
                    <h2 className={styles.title}>{title}</h2>
                    <div className={styles.content}>
                        <div className={styles.col1}>
                            <span className={styles.subtitle}>{subtitle}</span><br /><br />
                        </div>
                        <div className={styles.col2}>
                            <span className={styles.text}>{text1}</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};