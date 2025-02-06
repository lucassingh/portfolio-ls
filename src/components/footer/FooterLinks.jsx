import styles from './style.module.scss';
import { TextDipserse } from './TextDisperse';

const FooterLinks = () => {
    const openLinkInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className={styles.main}>
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
        </div>
    );
};

export default FooterLinks;
