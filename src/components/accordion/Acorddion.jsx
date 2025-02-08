import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Acorddion = ({ title, text }) => {

    const [isOpen, setIsOpen] = useState(false);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.div
            className="w-full cursor-pointer p-8 rounded-lg border border-[#c3c3c3] mb-8"
            onClick={toggleAccordion}
            style={{
                backgroundColor: isOpen ? "#c3c3c3" : "#1c1c1c",
                color: isOpen ? "#1c1c1c" : "#c3c3c3",
            }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="flex justify-center"
                animate={{
                    justifyContent: isOpen ? "flex-start" : "center",
                }}
            >
                <motion.h3
                    className="text-3sm"
                    animate={{
                        fontSize: isMobile ? "2rem" : isOpen ? "3rem" : "6rem",
                        color: isOpen ? "#1c1c1c" : "#c3c3c3",
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {title}
                </motion.h3>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mt-6"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="sm:text-5xl text-2sm leading-tight">
                            {text}
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Acorddion;
