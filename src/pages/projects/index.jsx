import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import Project from "@/components/gallery/project";
import Modal from "@/components/gallery/modal";
import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { Sidebar } from "@/components/sidebar/ProjectNav";
import { projects } from "../api/projects";

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
				<motion.div
					key={selectedCategory}
					className={styles.body}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
				>
					{filteredProjects.map((project, index) => (
						<Project onClick={() => handleNavigate(index)} index={index} title={project.title} setModal={setModal} key={index} />
					))}
				</motion.div>
				<Modal modal={modal} projects={filteredProjects} />
			</div>
		</Layout>
	);
};

export async function getStaticProps() {
	return {
		props: {
			projects, // Pasa el JSON estático como prop
		},
	};
}

export default Projects;
