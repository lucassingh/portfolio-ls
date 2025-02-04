'use client'

import { useState, useRef } from 'react';
import styles from './style.module.scss';

const getTextColor = (backgroundColor) => {
    const hexToRgb = (hex) => {
        const bigint = parseInt(hex.replace('#', ''), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return [r, g, b];
    };

    const calculateLuminance = (r, g, b) => {
        return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    };

    const [r, g, b] = hexToRgb(backgroundColor);
    const luminance = calculateLuminance(r, g, b);

    return luminance > 0.5 ? '#1c1c1c' : '#e5e7eb';
};

export const Card = ({ title, subtitle, description, date, color, i }) => {
    const [expanded, setExpanded] = useState(false);
    const container = useRef(null);
    const textColor = getTextColor(color);

    const toggleDescription = () => {
        setExpanded(!expanded);
    };

    return (
        <div ref={container} className={styles.cardContainer}>
            <div
                className={styles.card}
                style={{
                    backgroundColor: color,
                    top: `calc(-5vh + ${i * 40}px)`,
                    color: textColor
                }}
            >
                <h2 style={{ color: textColor }}>{title}</h2>
                <div className={styles.body}>
                    <div className={styles.description}>
                        <span className={styles.subtitle}>{subtitle}</span>
                        <p>
                            {expanded ? description : `${description.slice(0, 200)}...`}
                        </p>
                        {description.length > 20 && (
                            <button onClick={toggleDescription} className={styles.toggleButton}>
                                {expanded ? 'Hide' : 'See More'}
                            </button>
                        )}
                    </div>
                    <div className={styles.dateContainer}>
                        <span className={styles.dateText}>{date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
