import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export const Intro = () => {
    const container = useRef();

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

    return (
        <div className='h-screen overflow-hidden'>
            <motion.div style={{ y }} className='relative h-full'>
                <Image src='/assets/backgrounds/2.jpg' fill alt="image" style={{ objectFit: "cover" }} />
            </motion.div>
        </div>
    );
};

export default Intro;