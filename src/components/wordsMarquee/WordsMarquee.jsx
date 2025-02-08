'use client'
import { motion } from 'framer-motion';
import { Fragment } from "react";
import clsx from "clsx";

const WordsMarquee = ({ words, className, reverse }) => {
    return (
        <div className={clsx("w-full overflow-hidden", className)}>
            <motion.div
                className="flex gap-12 whitespace-nowrap"
                initial={{ x: reverse ? '0%' : '-100%' }}
                animate={{ x: reverse ? '-100%' : '0%' }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
                {Array.from({ length: 2 }).map((_, i) => (
                    <Fragment key={i}>
                        {words.map((word, index) => (
                            <div
                                className="text-[10rem] font-bold flex-shrink-0"
                                key={`${i}-${index}`}
                            >
                                {word}
                            </div>
                        ))}
                    </Fragment>
                ))}
            </motion.div>
        </div>
    );
};

export default WordsMarquee;