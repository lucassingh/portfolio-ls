import Layout from '@/components/layout';
import Loader from '@/components/loader/loader';
import { useEffect, useState } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import { CardProjectID } from '@/components/projectSlider/CardProjectID';
import FloatingImage from '@/components/imgHero/ImgHero';
import { projects } from '../api/projects';

const ProjectDetail = ({ project }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loader />;

    if (!project) {
        return (
            <Layout>
                <h1>Project Not Found</h1>
            </Layout>
        );
    }

    const handleClick = (link) => {
        window.open(link, '_blank');
    };

    return (
        <Layout>
            <FloatingImage
                title={project.title}
                imgSrc={`/assets/projects/${project.src}`}
                onClick={() => handleClick(project.link)}
            />
            <ReactLenis root>
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
    const paths = projects.map((project) => ({
        params: { id: project.id },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const project = projects.find((p) => p.id === params.id);

    if (!project) {
        return {
            notFound: true,
        };
    }

    return {
        props: { project },
    };
}

export default ProjectDetail;