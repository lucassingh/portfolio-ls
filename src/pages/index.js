import Layout from "@/components/layout";
import Loader from "../components/loader/loader";
import dynamic from 'next/dynamic';
import { useState } from "react";

const Scene = dynamic(() => import('../components/scene/Index'), {
	ssr: false,
})

export default function Home() {

	const [isLoaded, setIsLoaded] = useState(false);

	const handleLoaded = () => {
		setIsLoaded(true);
	};

	return (
		<>
			{!isLoaded ? (
				<Loader onLoaded={handleLoaded} />
			) : (
				<Layout>
					<Scene />
				</Layout>
			)}
		</>
	)
}
