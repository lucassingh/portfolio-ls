import { useState } from 'react';
import { motion } from 'framer-motion';
import { disperse } from './anim';

export function TextDipserse({ children, onClick }) {
    const [isAnimated, setIsAnimated] = useState(false);

    const getChars = (element) => {
        let chars = [];
        const word = element.props.children;
        word.split("").forEach((char, i) => {
            chars.push(
                <motion.span
                    custom={i}
                    variants={disperse}
                    animate={isAnimated ? "open" : "closed"}
                    key={char + i}
                >
                    {char}
                </motion.span>
            );
        });
        return chars;
    };

    return (
        <div
            style={{ cursor: "pointer" }}
            onMouseEnter={() => setIsAnimated(true)}
            onMouseLeave={() => setIsAnimated(false)}
            onClick={onClick}
            className='text-[#1c1c1c] font-bold introLine'
        >
            {getChars(children)}
        </div>
    );
}
