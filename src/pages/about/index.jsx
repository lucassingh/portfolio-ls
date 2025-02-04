'use client'
import React from 'react'
import Layout from '@/components/layout'
import { useEffect } from 'react';
import Lenis from 'lenis'
import Intro from '@/components/parallax/intro';
import Description from '@/components/parallax/description';
import Section from '@/components/parallax/section';
import Slider from '@/components/slider';
import IntegrationsColumn from '@/components/carousel/IntegrationColumns';

const integrations = [
    { name: "React", icon: '/assets/icon-1.png' },
    { name: "Next JS", icon: '/assets/icon-2.png' },
    { name: "Typescript", icon: '/assets/icon-3.png' },
    { name: "GitHub", icon: '/assets/icon-4.png' },
    { name: "Figma", icon: '/assets/icon-5.png' },
    { name: "Material UI", icon: '/assets/icon-6.png' },
    { name: "Jira", icon: '/assets/icon-7.png' },
    { name: "Sass", icon: '/assets/icon-8.png' }
];

const About = () => {

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    });

    return (
        <>
            <Layout>
                <section className="min-h-auto w-screen overflow-hidden bg-[#1c1c1c]">
                    <h2 className="grid w-full gap-[3vw] py-10 text-center font-black uppercase leading-[.7]">
                        <div className="text-[27vw]">
                            code
                        </div>
                        <div className="grid gap-[3vw] text-[30vw] md:flex md:text-[11vw]">
                            <span className="inline-block">that </span>
                            <span className="inline-block max-md:text-[27vw]">makes </span>
                            <span className="inline-block max-md:text-[40vw]">you </span>
                        </div>
                        <div className="text-[32vw]">
                            Smile
                        </div>
                    </h2>
                </section>
                <Intro />
                <Description />
                <Section />
                <Slider />
                <section className="py-24 overflow-hidden">
                    <div className="container">
                        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                            <div className='mt-20'>
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
                </section>
            </Layout>
        </>
    );
};

export default About;