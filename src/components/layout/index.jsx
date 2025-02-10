import React from 'react';
import { motion } from 'framer-motion';

const Layout = ({ children, key }) => {
    const numOffCols = 6;

    const columnsExpandVariant = {
        initial: {
            left: 0
        },
        enter: (i) => ({
            left: '100vw',
            transition: {
                duration: 0.2,
                delay: 0.2 * i,
                ease: "easeIn"
            },
        }),
        exit: (i) => ({
            width: '100vw',
            transition: {
                duration: 0.3,
                delay: 0.2 * i,
                ease: "easeIn"
            },
        })
    }

    return (
        <div>
            <motion.div className='w-full fixed h-screen flex flex-col top-0 left-0 pointer-events-none z-40'>
                {
                    [...Array(numOffCols)].map((_, index) => {
                        return (
                            <motion.div
                                key={index}
                                variants={columnsExpandVariant}
                                initial={'initial'}
                                animate={'enter'}
                                exit={'exit'}
                                custom={numOffCols + index}
                                className='bg-customLight relative w-full h-full'>
                            </motion.div>
                        )
                    })
                }
            </motion.div>
            {children}
        </div>
    );
};

export default Layout;
