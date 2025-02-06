'use client';
import styles from './project.module.scss';

export const Project = ({ index, title, setModal, onClick }) => {

    return (
        <div onClick={onClick} onMouseEnter={() => { setModal({ active: true, index }) }} onMouseLeave={() => { setModal({ active: false, index }) }} className={styles.project}>
            <h2 className='project-title'>{title}</h2>
            <p className='mob'>Design & Development</p>
        </div>
    )
}

export default Project;