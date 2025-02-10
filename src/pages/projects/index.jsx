import { useState } from 'react';
import styles from './style.module.scss';
import Project from '@/components/gallery/project';
import Modal from '@/components/gallery/modal';
import Layout from '@/components/layout';
import { useRouter } from 'next/router';

const Projects = ({ projects }) => {
	const [modal, setModal] = useState({ active: false, index: 0 });
	const router = useRouter();

	const handleNavigate = (index) => {
		const project = projects[index];
		router.push(`/projects/${project.id}`);
	};

	return (
		<Layout>
			<div className={styles.main}>
				<div className={styles.body}>
					{projects.map((project, index) => (
						<Project onClick={() => handleNavigate(index)} index={index} title={project.title} setModal={setModal} key={index} />
					))}
				</div>
				<Modal modal={modal} projects={projects} />
			</div>
		</Layout>
	);
};

export async function getStaticProps() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`);
	const projects = await res.json();

	return {
		props: {
			projects,
		},
	};
}

export default Projects;
