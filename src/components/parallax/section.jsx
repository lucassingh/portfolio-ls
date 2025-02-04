import Image from 'next/image';
import Background from '../../../public/assets/1.jpg';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Paragraph2 from '../paragraph/paragraph2';

export const Section = () => {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div
            ref={container}
            className='relative flex items-center justify-center h-screen overflow-hidden'
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className='relative z-10 p-7 sm:p-20 mix-blend-difference text-white w-full h-auto flex flex-col justify-between'>
                <Paragraph2 paragraph='On this website, you can check out my projects, download my CV, view my work history, and see my academic milestones.' />
            </div>
            <div className='fixed top-[-50vh] left-0 h-[120vh] w-full'>
                <motion.div style={{ y }} className='relative w-full h-full'>
                    <Image src={Background} fill alt="image" style={{ objectFit: "cover" }} />
                </motion.div>
            </div>
        </div>
    );
};

export default Section;