import { useState } from "react";
import styles from "./style.module.scss";
import Project from "@/components/gallery/project";
import Modal from "@/components/gallery/modal";
import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { Sidebar } from "@/components/sidebar/ProjectNav";

const Projects = ({ projects }) => {
	const [modal, setModal] = useState({ active: false, index: 0 });
	const [selectedCategory, setSelectedCategory] = useState("All");
	const router = useRouter();

	const handleNavigate = (index) => {
		const project = filteredProjects[index];
		router.push(`/projects/${project.id}`);
	};

	const filteredProjects =
		selectedCategory === "All"
			? projects
			: projects.filter((project) => project.category === selectedCategory);

	return (
		<Layout>
			<div className="w-full flex justify-center mb-14 mt-44 md:mt-0 md:mb-0">
				<Sidebar setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
			</div>
			<div className={styles.main}>
				<div className={styles.body}>
					{filteredProjects.map((project, index) => (
						<Project onClick={() => handleNavigate(index)} index={index} title={project.title} setModal={setModal} key={index} />
					))}
				</div>
				<Modal modal={modal} projects={filteredProjects} />
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
