
import styles from './style.module.scss';
import { TextDipserse } from './TextDisperse';

const FooterLinks = () => {
    return (
        <div className={styles.main}>
            <div className={styles.body}>
                <div className='introLine'>
                    <p>Lucas</p>
                    <p>Singh</p>
                </div>

                <div className='introLine'>
                    <p>web</p>
                    <p>& Design</p>
                </div>

                <div className='introLine'>
                    <p>Development</p>
                </div>

                <TextDipserse>
                    <p>+5493462565888</p>
                </TextDipserse>

                <TextDipserse>
                    <p>→LinkedIn</p>
                </TextDipserse>

                <TextDipserse>
                    <p>→Github</p>
                </TextDipserse>

                <TextDipserse>
                    <p>→lucas.singh10@gmail.com</p>
                </TextDipserse>
            </div>
        </div>
    )
}

export default FooterLinks