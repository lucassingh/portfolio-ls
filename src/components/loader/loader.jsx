import { useEffect, useState } from 'react';
import styles from './style.module.scss';

export const Loader = ({ onLoaded }) => {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (onLoaded) onLoaded();
        }, 2000);

        const interval = setInterval(() => {
            setProgress((prev) => {
                const nextProgress = prev + 5;
                if (nextProgress >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return nextProgress;
            });
        }, 100);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [onLoaded]);

    return (
        <div className={styles.loader}>
            <span className={styles.progress}>{progress}%</span>
        </div>
    );
};

export default Loader;

