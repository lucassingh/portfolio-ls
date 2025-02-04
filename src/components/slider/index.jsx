'use client'
import styles from './style.module.scss';
import Card from './card';
import { projects } from './data';

export const Slider = () => {
    return (
        <div className={styles.main}>
            <div className={styles.contTitle}>
                <h2 className='text-5xl'>Work Experience</h2>
            </div>
            {
                projects.map((project, i) => {
                    return <Card key={`p_${i}`} {...project} i={i} />
                })
            }
        </div>
    )
}

export default Slider