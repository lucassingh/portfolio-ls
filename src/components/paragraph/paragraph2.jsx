import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './style.module.scss';

const Word = ({ children, progress, range }) => {

    const opacity = useTransform(progress, range, [0, 1])

    return <span className={styles.word2}>
        <span className={styles.shadow2}>{children}</span>
        <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>

}

const Paragraph2 = ({ paragraph }) => {

    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.9", "start 0.25"]
    })

    const words = paragraph.split(" ")

    return (
        <h2
            ref={container}
            className={styles.paragraph2}
        >
            {
                words.map((word, i) => {
                    const start = i / words.length
                    const end = start + (1 / words.length)
                    return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
                })
            }
        </h2>
    )
}

export default Paragraph2