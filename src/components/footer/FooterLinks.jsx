import styles from './style.module.scss';
import { TextDipserse } from './TextDisperse';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FooterLinks = () => {

    const openLinkInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    return (
        <motion.div className={styles.main} ref={ref} animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}>
            <div className={styles.body}>
                <div className='introLine'>
                    <p>Lucas Singh</p>
                </div>

                <div className='introLine'>
                    <p>web & Design</p>
                </div>

                <div className='introLine'>

                </div>

                <TextDipserse onClick={() => openLinkInNewTab('https://wa.me/5493462565888')}>
                    <p>+5493462565888</p>
                </TextDipserse>

                <TextDipserse onClick={() => openLinkInNewTab('https://www.linkedin.com/in/lucassingh/')}>
                    <p>→LinkedIn</p>
                </TextDipserse>

                <TextDipserse onClick={() => openLinkInNewTab('https://github.com/lucassingh')}>
                    <p>→Github</p>
                </TextDipserse>

                <TextDipserse onClick={() => openLinkInNewTab('mailto:lucas.singh10@gmail.com')}>
                    <p>→lucas.singh10@gmail.com</p>
                </TextDipserse>
            </div>
        </motion.div>
    );
};

export default FooterLinks;
