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
    }, []);

    useEffect(() => {
        if (animation.current) {
            if (isHovered) {
                animation.current.speed = 0.5;
            } else {
                animation.current.speed = 1;
            }
        }
    }, [isHovered]);

    // Función para redirigir a Google
    const handleClick = () => {
        window.open('https://www.google.com', '_blank');
    };

    return (
        <section className="py-4">
            <div className="overflow-x-clip p-1 flex justify-center">
                <div
                    className='button-cta'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleClick} // Agregamos el onClick
                    style={{
                        backgroundColor: isHovered ? '#1c1c1c' : 'transparent', // Cambia el fondo al hacer hover
                        transition: 'background-color 0.3s ease', // Transición suave
                        cursor: 'pointer', // Cambia el cursor a pointer
                    }}
                >
                    <div style={{ width: '100%', overflow: 'hidden' }}>
                        <motion.div
                            className="flex flex-none gap-16 text-4xl pr-16 font-medium group"
                            ref={scope}
                            style={{ width: 'max-content' }}
                        >
                            {Array.from({ length: 20 }).map((_, i) => (
                                <div key={i}>
                                    <span style={{ color: isHovered ? '#c3c3c3' : '#1c1c1c', transition: 'color 0.3s ease' }}>→</span>
                                    <span style={{ color: isHovered ? '#c3c3c3' : '#1c1c1c', transition: 'color 0.3s ease' }}>Make a call</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}