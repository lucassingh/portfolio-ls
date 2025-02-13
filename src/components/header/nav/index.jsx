import { motion } from 'framer-motion';
import { footerLinks, links } from './data';
import { perspective, slideIn } from './anim';
import styles from './style.module.scss';

export const index = () => {

    return (
        <div className={styles.nav}>
            <div className={styles.body}>
                {
                    links.map((link, i) => {
                        return (
                            <div key={`b_${i}`} className={styles.linkContainer}>
                                <a href={link.href}>
                                <motion.p
                                    className='link-nav'
                                    custom={i}
                                    variants={perspective}
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                >
                                    
                                        {link.title}
                                </motion.p>
                                    </a>
                            </div>
                        )
                    })
                }
            </div>
            <motion.div className={styles.footer}>
                {
                    footerLinks.map((link, i) => {

                        return (
                            <motion.p
                                className='link-footer'
                                variants={slideIn}
                                custom={i}
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                key={`f_${i}`}
                            >
                                <a href={link.href} target='blank'>
                                    {link.title}
                                </a>
                            </motion.p>
                        )
                    })
                }
            </motion.div>
        </div>
    )
}

export default index;