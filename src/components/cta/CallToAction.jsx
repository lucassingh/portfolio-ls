'use client';

import { useEffect, useRef, useState } from 'react';
import { useAnimate, motion } from 'framer-motion';

export default function CallToAction() {
    const [isHovered, setIsHovered] = useState(false);
    const [scope, animate] = useAnimate();
    const animation = useRef();

    useEffect(() => {
        animation.current = animate(
            scope.current,
            { x: "-50%" },
            { duration: 20, ease: 'linear', repeat: Infinity }
        );
    });

    useEffect(() => {
        if (animation.current) {
            if (isHovered) {
                animation.current.speed = 0.5;
            } else {
                animation.current.speed = 1;
            }
        }
    }, [isHovered]);

    const handleClick = () => {
        window.open('https://calendly.com/lucas-singh10/30min', '_blank');
    };

    return (
        <section className="py-4">
            <div className="overflow-x-clip p-1 flex justify-center">
                <div
                    className='button-cta'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleClick}
                    style={{
                        backgroundColor: isHovered ? '#1c1c1c' : 'transparent',
                        transition: 'background-color 0.3s ease',
                        cursor: 'pointer',
                    }}
                >
                    <div style={{ width: '100%', overflow: 'hidden' }}>
                        <motion.div
                            className="flex flex-none gap-16 sm:text-4xl text-3xl pr-16 font-medium group"
                            ref={scope}
                            style={{ width: 'max-content' }}
                        >
                            {Array.from({ length: 20 }).map((_, i) => (
                                <div key={i}>
                                    <span style={{ color: isHovered ? '#c3c3c3' : '#1c1c1c', transition: 'color 0.3s ease' }}>→</span>
                                    <span style={{ color: isHovered ? '#c3c3c3' : '#1c1c1c', transition: 'color 0.3s ease' }}>Call me</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}