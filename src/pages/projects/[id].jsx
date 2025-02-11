import Layout from '@/components/layout';
import Loader from '@/components/loader/loader';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import styles from './cardPro.module.scss';

const CardProjectID = ({ title, subtitle, text1, bgColor }) => {

    return (
        <div className={styles.card}>
            <div className={styles.cardInner} style={{ backgroundColor: bgColor }}>
                <div className={styles.cardContent}>
                    <h2 className={styles.title}>{title}</h2>
                    <div className={styles.content}>
                        <div className={styles.col1}>
                            <span className={styles.subtitle}>{subtitle}</span><br /><br />
                        </div>
                        <div className={styles.col2}>
                            <span className={styles.text}>{text1}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

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
                <h1>No se encontró el proyecto</h1>
            </Layout>
        );
    }

    return (
        <Layout>
            <ReactLenis root>
                <div className="relative w-full flex flex-col justify-center">
                    <h1 className="text-6xl md:text-9xl font-bold px-5 md:px-10 absolute top-20 transform -translate-y-1/2">
                        {project.title}
                    </h1>

                    <div className="w-full px-5 md:px-10 h-1/2">
                        <div
                            className="w-full h-auto pt-40 sm:pt-52 sm:h-auto overflow-hidden rounded-t-2xl"
                            style={{
                                transform: `translateY(${scrollY * 0.2}px)`,
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
                        </div>
                    </div>
                </div>
                <div className="relative h-auto w-full flex flex-col justify-center">
                    {project.cards.map((card, i) => (
                        <CardProjectID
                            key={i}
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
