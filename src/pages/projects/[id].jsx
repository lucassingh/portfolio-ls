import Layout from '@/components/layout';
import Loader from '@/components/loader/loader';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import { CardProjectID } from '@/components/projectSlider/CardProjectID';
import { motion } from 'framer-motion';

const ProjectDetail = ({ project }) => {
    const [loading, setLoading] = useState(true);
    const [scrollY, setScrollY] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    if (loading) return <Loader />;

    if (!project) {
        return (
            <Layout>
                <h1>Project Not Found</h1>
            </Layout>
        );
    }

    return (
        <Layout>
            <ReactLenis root>
                <div className="relative w-full flex flex-col justify-center">
                    <motion.h1 className="text-6xl md:text-9xl font-bold px-5 md:px-10 absolute top-20 transform -translate-y-1/2"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 3,
                            type: 'spring',
                            stiffness: 50,
                            damping: 25,
                        }}
                    >
                        {project.title}
                    </motion.h1>
                    <div className="w-full px-5 md:px-10 h-1/2">
                        <motion.div
                            className="w-full h-auto pt-40 sm:pt-52 sm:h-auto overflow-hidden rounded-t-2xl"
                            style={{
                                transform: `translateY(${scrollY * 0.2}px)`,
                            }}
                            initial={{ scale: 1.2, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 3,
                                ease: 'easeInOut',
                            }}
                        >
                            <Image
                                src={isMobile ? `/assets/projects/mobile/${project.srcMobile}` : `/assets/projects/${project.src}`}
                                alt={project.title}
                                width={1920}
                                height={800}
                                priority
                                className="w-full h-full object-cover rounded-t-[20px]"
                            />
                        </motion.div>
                    </div>
                </div>
                <div className='w-full h-auto pb-0'>
                    {project.cards.map((card, index) => (
                        <CardProjectID
                            key={index}
                            i={index}
                            title={card.title}
                            subtitle={card.subtitle}
                            text1={card.text1}
                            bgColor={card.bgColor}
                        />
                    ))}
                </div>
            </ReactLenis>
        </Layout>
    );
};

export async function getStaticPaths() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`);
    const projects = await res.json();

    const paths = projects.map((project) => ({
        params: { id: project.id.toString() },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`);
    const projects = await res.json();
    const project = projects.find((p) => p.id.toString() === params.id);

    return {
        props: { project },
    };
}

export default ProjectDetail;
