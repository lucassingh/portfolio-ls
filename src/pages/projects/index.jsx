import { useState } from 'react';
import styles from './style.module.scss';
import Project from '@/components/gallery/project';
import Modal from '@/components/gallery/modal';
import Layout from '@/components/layout';

const projects = [
	{
		title: "Bizit Global",
		src: "img-1.png",
		color: "#000000",
		link: 'https://www.bizitglobal.com/'
	},
	{

		title: "Sembrando Valores",
		src: "img-2.png",
		color: "#8C8C8C",
		link: 'https://sembrandovalores.net/'
	},
	{
		title: "Why Cruise Disney",
		src: "img-9.png",
		color: "#706D63",
		link: 'https://disneycruise.disney.go.com/why-cruise-disney/'
	},
	{

		title: "Rentas Córdoba",
		src: "img-10.png",
		color: "#8C8C8c",
		link: 'https://www.rentascordoba.gob.ar/inicio/'
	},
	{
		title: "Fizzi Soda",
		src: "img-3.png",
		color: "#EFE8D3",
		link: 'https://fizzi-landing-omega.vercel.app/'

	},
	{
		title: "Game landing",
		src: "img-4.png",
		color: "#000000",
		link: 'https://game-landing-lilac.vercel.app/'
	},
	{
		title: "Iphone Landing",
		src: "img-5.png",
		color: "#706D63",
		link: 'https://iphone-landing-ruby.vercel.app/'
	},
	{
		title: "Suburbia Skate Shop",
		src: "img-6.png",
		color: "#000000",
		link: 'https://suburbia-landing-6d17.vercel.app/'
	},
	{

		title: "Sass Landing",
		src: "img-7.png",
		color: "#8C8C8C",
		link: 'https://sass-landing-mu.vercel.app/'
	},
	{
		title: "3D Portfolio",
		src: "img-8.png",
		color: "#EFE8D3",
		link: 'https://portfolio-island.vercel.app/'
	}
]

const Projects = () => {

	const [modal, setModal] = useState({ active: false, index: 0 })

	const handleOpenLink = (index) => {
		const project = projects[index];
		if (typeof window !== "undefined" && project?.link) {
			window.open(project.link, "_blank");
		}
	};

	return (
		<Layout>
			<div className={styles.main}>
				<div className={styles.body}>
					{
						projects.map((project, index) => {
							return <Project onClick={() => handleOpenLink(index)} index={index} title={project.title} setModal={setModal} key={index} />
						})
					}
				</div>
				<Modal modal={modal} projects={projects} />
			</div>
		</Layout>
	)
}

export default Projects;