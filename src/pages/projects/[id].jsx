import Layout from '@/components/layout';

const ProjectDetail = ({ project }) => {
    if (!project) {
        return <Layout><h1>Proyecto no encontrado</h1></Layout>;
    }

    return (
        <Layout>
            <div style={{ padding: '20px', background: '#1c1c1c', minHeight: '100vh', textAlign: 'center' }}>
                <h1 style={{ color: '#fff' }}>{project.title}</h1>
                <img
                    src={`/assets/projects/${project.src}`}
                    alt={project.title}
                    width="400"
                    style={{ borderRadius: '10px' }}
                />
                <p style={{ color: '#fff', marginTop: '10px' }}>Diseño y Desarrollo</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-block', marginTop: '15px', padding: '10px 20px', background: '#fff', color: '#000', textDecoration: 'none', borderRadius: '5px' }}>
                    Ver proyecto
                </a>
            </div>
        </Layout>
    );
};

export async function getStaticPaths() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`);
    const projects = await res.json();

    const paths = projects.map((project) => ({
        params: { id: project.id },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`);
    const projects = await res.json();
    const project = projects.find((p) => p.id === params.id);

    return {
        props: {
            project,
        },
    };
}

export default ProjectDetail;
