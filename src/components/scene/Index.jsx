'use client';
import { Canvas } from '@react-three/fiber'
import Model from './Model';
import { Environment } from '@react-three/drei'
import Paragraph2 from '../paragraph/paragraph2';
import SliderWords from '../sliderWords/SliderWords';
import Acorddion from '../accordion/Acorddion';
import WordsMarquee from '../wordsMarquee/WordsMarquee';
import Location from '../location/Location';

const services = [
    {
        id: 1,
        title: 'Figma to web',
        text: 'Transform your Figma designs into fully responsive, high-performance websites with pixel-perfect accuracy. Whether it’s a simple landing page or a complex web interface, I ensure your design comes to life with clean, maintainable code.'
    },
    {
        id: 2,
        title: 'Development from Scratch',
        text: 'Build fully customized websites from the ground up, tailored to your specific needs. Whether it’s a static site or a dynamic web application, I develop scalable, efficient, and optimized solutions using modern web technologies.'
    },
    {
        id: 3,
        title: 'No-Code Solutions',
        text: 'Create professional websites without writing a single line of code using Framer. This approach is perfect for businesses and individuals looking for visually stunning, fast, and easily manageable websites without the complexity of traditional development.'
    },
    {
        id: 4,
        title: 'Web Applications',
        text: 'Develop robust and interactive web apps that go beyond static pages. These applications include user authentication, real-time processes, database interactions, and seamless API integrations, making them ideal for businesses that require more advanced digital solutions.'
    },
    {
        id: 5,
        title: 'Digital Product Design',
        text: 'Design intuitive and user-friendly digital products, from web and mobile apps to SaaS platforms. I focus on UX/UI best practices to create products that are both visually appealing and highly functional.'
    }
]

const words = ['accurate', 'timely', 'seamless', 'dynamic', 'user-focused', 'features'];

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
            <div className="section-h h-auto flex flex-col w-full items-center justify-center">
                <h2 className="text-5xl font-medium mt-6 mb-16">
                    Main Services
                </h2>
                {
                    services.map((service, index) => (
                        <Acorddion key={service.id} serviceId={service.id} title={service.title} text={service.text} />
                    ))
                }
            </div>
            <div className="section-h h-screen flex flex-col w-full items-center justify-center">
                <Location />
            </div>
            <div className="w-full overflow-hidden py-32">
                <WordsMarquee words={words} />
                <WordsMarquee words={words} reverse />
            </div>
        </>
    );
}
