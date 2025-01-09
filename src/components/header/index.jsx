import React from 'react'
import styles from './style.module.scss';
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion'
import Button from './button';
import Nav from './nav';

export const NavBar = () => {

    const [isActive, setIsActive] = useState(false);

    const [isMobile, setIsMobile] = useState(false);

    const menu = {
        open: {
            width: isMobile ? "312px" : "480px",
            height: "500px",
            top: "-25px",
            right: "-25px",
            transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }

        },
        closed: {
            width: "100px",
            height: "40px",
            top: "0px",
            right: "0px",
            transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
        }
    }

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    return (
        <>
            <div className={styles.header}>
                <motion.div
                    className={styles.menu}
                    variants={menu}
                    animate={isActive ? "open" : "closed"}
                    initial="closed"
                >
                    <AnimatePresence>
                        {isActive && (
                            <Nav />
                        )}
                    </AnimatePresence>
                </motion.div>
                <Button isActive={isActive} toggleMenu={() => { setIsActive(!isActive) }} />
            </div>
        </>
    )
}

export default NavBar;