'use client'
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Layout from '@/components/layout'
import Lenis from 'lenis'
import Intro from '@/components/parallax/intro';
import Description from '@/components/parallax/description';
import Slider from '@/components/slider';
import Section from '@/components/parallax/section';
import IntegrationsColumn from '@/components/carousel/IntegrationColumn';
import Mask from "@/components/mask/Mask";
import { SchoolGrid } from "@/components/education";

const integrations = [
    { name: "React", icon: '/assets/icons/icon-1.png' },
    { name: "Next JS", icon: '/assets/icons/icon-2.png' },
    { name: "Typescript", icon: '/assets/icons/icon-3.png' },
    { name: "GitHub", icon: '/assets/icons/icon-4.png' },
    { name: "Figma", icon: '/assets/icons/icon-5.png' },
    { name: "Material UI", icon: '/assets/icons/icon-6.png' },
    { name: "Jira", icon: '/assets/icons/icon-7.png' },
    { name: "Sass", icon: '/assets/icons/icon-8.png' }
];

const About = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [firstAnimationDone, setFirstAnimationDone] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    setIsVisible(entry.isIntersecting);
                    if (entry.isIntersecting && !firstAnimationDone) {
                        setTimeout(() => setFirstAnimationDone(true), 2000);
                    }
                },
                { threshold: 0.2 }
            );

            if (sectionRef.current) observer.observe(sectionRef.current);

            return () => observer.disconnect();
        }
    }, [firstAnimationDone]);

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    })

    return (
        <>
            <Layout>
                <section
                    ref={sectionRef}
                    className="w-screen overflow-hidden bg-[#1c1c1c] py-40 sm:py-20 text-center"
                >
                    <h2 className="grid w-full gap-[3vw] font-black uppercase leading-[.7]">
                        <motion.div
                            className="text-[28vw] mb-5 sm:mb-0"
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={
                                isVisible
                                    ? { x: 0, opacity: 1 }
                                    : firstAnimationDone
                                        ? { x: "-100%", opacity: 0 }
                                        : {}
                            }
                            transition={{
                                duration: 1,
                                ease: "easeOut",
                                delay: firstAnimationDone ? 0 : 2.7,
                            }}
                        >
                            Hi! I'm Lucas
                        </motion.div>

                        <motion.div
                            className="flex justify-center gap-[3vw] text-[18vw] md:flex md:text-[11vw]"
                            initial={{ x: "100%", opacity: 0 }}
                            animate={
                                isVisible
                                    ? { x: 0, opacity: 1 }
                                    : firstAnimationDone
                                        ? { x: "100%", opacity: 0 }
                                        : {}
                            }
                            transition={{
                                duration: 1,
                                ease: "easeOut",
                                delay: firstAnimationDone ? 0.3 : 3,
                            }}
                        >
                            <span className="inline-block mb-5 sm:mb-0">front </span>
                            <span className="inline-block max-md:text-[18vw]">end </span>
                        </motion.div>

                        <motion.div
                            className="text-[17vw]"
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={
                                isVisible
                                    ? { x: 0, opacity: 1 }
                                    : firstAnimationDone
                                        ? { x: "-100%", opacity: 0 }
                                        : {}
                            }
                            transition={{
                                duration: 1,
                                ease: "easeOut",
                                delay: firstAnimationDone ? 0.5 : 3.2,
                            }}
                        >
                            developer
                        </motion.div>
                    </h2>
                </section>
                <Intro />
                <Description />
                <Section />
                <Slider />
                <div className="py-12 sm:py-24 overflow-hidden">
                    <div className="container">
                        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                            <div className='mt-0 sm:mt-20'>
                                <h2 className="text-5xl font-medium mt-6">
                                    Tech Stack & Tools I Use
                                </h2>
                                <p className="text-white/50 mt-4 text-lg mb-3">
                                    I work professionally, focusing on creating high-performance, scalable, and visually appealing web applications. My goal is to deliver efficient solutions that adhere to the highest quality standards, ensuring a seamless user experience and maintainable code. I use tools and practices that optimize performance, team collaboration, and project organization, always with a focus on scalability and customization to meet each client's specific needs.
                                    <br />
                                </p>
                            </div>
                            <div>
                                <div className="h-[400px] lg:h-[800px] grid md:grid-cols-2 gap-4 mt-8 lg:mt-0 overflow-hidden [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.05)5%,rgba(0,0,0,0.95)95%,rgba(0,0,0,0))] [--webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.05)5%,rgba(0,0,0,0.95)95%,rgba(0,0,0,0))]">
                                    <IntegrationsColumn
                                        integrations={integrations}
                                    />
                                    <IntegrationsColumn
                                        reverse
                                        integrations={integrations.slice().reverse()}
                                        className="hidden md:flex"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="isMobile">
                    <Mask />
                </div>
                <div className="title flex text-center justify-center">
                    <h2 className="text-5xl font-medium mt-10 mb-0">
                        Learning
                    </h2>
                </div>
                <SchoolGrid />
            </Layout>
        </>
    )
}

export default About