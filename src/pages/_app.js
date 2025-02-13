import CustomCursor from '@/components/cursor/customCursor';
import FooterComponent from '@/components/footer/FooterComponent'
import NavBar from '@/components/header'
import '@/styles/globals.scss'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {

	const router = useRouter();

	return (
		<AnimatePresence mode='popLayout'>
			<NavBar key="navbar" />
			<CustomCursor key="custom-cursor" />
			<Component {...pageProps} key={router.asPath} />
			<FooterComponent key="footer" />
		</AnimatePresence>
	)
}
