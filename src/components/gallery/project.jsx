'use client';
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from './project.module.scss';

export const Project = ({ index, title, setModal, onClick }) => {

    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    return (
        <motion.div ref={ref} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} onClick={onClick} onMouseEnter={() => { setModal({ active: true, index }) }} onMouseLeave={() => { setModal({ active: false, index }) }} className={styles.project}>
            <h2 className='project-title'>{title}</h2>
            <p className='mob'>Design & Development</p>
        </motion.div>
    )
}

export default Project;