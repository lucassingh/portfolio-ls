import React from 'react'
import Layout from '@/components/layout'
import { useEffect } from 'react';
import Lenis from 'lenis'
import Intro from '@/components/parallax/intro';
import Description from '@/components/parallax/description';
import Section from '@/components/parallax/section';
import Slider from '@/components/slider';

const About = () => {

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <>
            <Layout>
                {/*<div className='w-full h-screen bg-[#1c1c1c]'>
                    qweqwewe
                </div>*/}
                <section className="min-h-screen w-screen overflow-hidden bg-[#1c1c1c]">
                    <h2 className="grid w-full gap-[3vw] py-10 text-center font-black uppercase leading-[.7]">
                        <div className="text-[27vw]">code</div>
                        <div className="grid gap-[3vw] text-[30vw] md:flex md:text-[11vw]">
                            <span className="inline-block">that </span>
                            <span className="inline-block max-md:text-[27vw]">makes </span>
                            <span className="inline-block max-md:text-[40vw]">you </span>
                        </div>
                        <div className="text-[32vw]">Smile</div>
                    </h2>
                </section>
                <Intro />
                <Description />
                <Section />
                <Slider />
            </Layout>

        </>
    )
}

export default About