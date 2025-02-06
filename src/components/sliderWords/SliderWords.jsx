import styles from './style.module.scss'

const SliderWords = () => {
    return (
        <div className={styles.card}>
            <div className={styles.loader}>
                <p>WEB</p>
                <div className={styles.words}>
                    <span className={styles.word}></span>
                    <span className={styles.word}>developer</span>
                    <span className={styles.word}>designer</span>
                    <span className={styles.word}>front end</span>
                    <span className={styles.word}>UX/UI</span>

                </div>
            </div>
        </div>

    )
}

export default SliderWords