import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './school.module.scss';
import { useInView } from "react-intersection-observer";

export const School = ({ school }) => {

    const { title1, title2, src, link } = school;

    const [isActive, setIsActive] = useState(false);

    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    const anim = {
        initial: { width: 0 },
        open: { width: "auto", transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } },
        closed: { width: 0 }
    }

    const handleClick = () => {
        window.open(link, '_blank');
    };

    return (
        <motion.div ref={ref} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} onClick={handleClick} onMouseEnter={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }} className={styles.project}>
            <p>{title1}</p>
            <motion.div variants={anim} animate={isActive ? "open" : "closed"} className={styles.imgContainer}>
                <img src={`/assets/education/${src}`}></img>
            </motion.div>
            <p>{title2}</p>
        </motion.div>
    )
}
