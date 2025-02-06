'use client';
import { Canvas } from '@react-three/fiber'
import Model from './Model';
import { Environment } from '@react-three/drei'
import Paragraph2 from '../paragraph/paragraph2';
import SliderWords from '../sliderWords/SliderWords';

export default function Index() {

    const text = `Welcome to my portfolio! Here, you can learn about me, download my resume, explore the projects I've worked on, and most importantly, get in touch with me. Thank you very much for your visit!`;

    return (
        <>
            <div className="w-full h-screen inset-0 -z-10">
                <Canvas className='w-full h-full' >
                    <Model />
                    <directionalLight intensity={2} position={[0, 2, 3]} />
                    <Environment preset="city" />
                </Canvas>
                <div className="absolute right-7 bottom-5 md:right-20 md:bottom-20">
                    <SliderWords />
                </div>
            </div>
            <div className="section-h flex w-full h-auto items-center justify-center">
                <Paragraph2 paragraph={text} />
            </div>
            <div className="section-h h-screen flex w-full items-center justify-center">

            </div>
        </>
    );
}
