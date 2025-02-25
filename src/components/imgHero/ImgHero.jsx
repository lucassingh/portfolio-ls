'use client'

import gsap from "gsap";
import { useRef } from "react";
import Button from "../button/Button";
import { motion } from 'framer-motion';
import Image from "next/image";
import { useRouter } from "next/router";

const FloatingImage = ({ title, imgSrc, onClick }) => {

    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    const frameRef = useRef(null);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;

        if (!element) return;

        const rect = element.getBoundingClientRect();
        const xPos = clientX - rect.left;
        const yPos = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((yPos - centerY) / centerY) * -10;
        const rotateY = ((xPos - centerX) / centerX) * 10;

        gsap.to(element, {
            duration: 0.3,
            rotateX,
            rotateY,
            transformPerspective: 500,
            ease: "power1.inOut",
        });
    };

    const handleMouseLeave = () => {
        const element = frameRef.current;

        if (element) {
            gsap.to(element, {
                duration: 0.3,
                rotateX: 0,
                rotateY: 0,
                ease: "power1.inOut",
            });
        }
    };

    return (
        <div id="story" className="h-auto w-screen bg-[#1c1c1c] text-blue-50">
            <div className="flex size-full flex-col items-center py-36 md:py-12 pb-12 sm:pb-24">
                <div className="size-full">
                    <motion.h1 className="text-6xl md:text-9xl font-bold px-5 md:px-10 absolute top-30 md:top-3 transform -translate-y-1/2"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 3,
                            type: 'spring',
                            stiffness: 50,
                            damping: 25,
                        }}
                    >
                        <div onClick={handleGoBack} className="cursor-pointer z-60 w-14">
                            <Image onClick={handleGoBack} className="cursor-pointer mr-4 ml-2" src='/assets/icons/back.png' width={40} height={30} alt='back' />
                        </div>
                        {title}
                    </motion.h1>

                    <div className="story-img-container">
                        <div className="story-img-mask">
                            <motion.div className="story-img-content"
                                initial={{ scale: 1.2, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    duration: 3,
                                    ease: 'easeInOut',
                                }}
                            >
                                <img
                                    ref={frameRef}
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseEnter={handleMouseLeave}
                                    src={imgSrc}
                                    alt="entrance.webp"
                                    className="object-contain"
                                />
                            </motion.div>
                        </div>

                        <svg
                            className="invisible absolute size-0"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <filter id="flt_tag">
                                    <feGaussianBlur
                                        in="SourceGraphic"
                                        stdDeviation="8"
                                        result="blur"
                                    />
                                    <feColorMatrix
                                        in="blur"
                                        mode="matrix"
                                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                                        result="flt_tag"
                                    />
                                    <feComposite
                                        in="SourceGraphic"
                                        in2="flt_tag"
                                        operator="atop"
                                    />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>

                <div className="mt-24 flex w-full justify-center md:-mt-5 md:me-44 md:justify-end">
                    <div className="flex h-full w-fit flex-col items-start">
                        <p className="mt-0 max-w-sm text-start font-circular-web text-[#c3c3c3] md:text-start">
                            If you're interested in learning more about this project, you can visit it at the following link.
                        </p>
                        <Button
                            text="Visit Site"
                            onClick={onClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FloatingImage;