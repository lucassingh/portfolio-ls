import FooterComponent from '@/components/footer/FooterComponent'
import NavBar from '@/components/header'
import '@/styles/globals.scss'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps }) {
	return (
		<>
			<AnimatePresence mode='sync'>
				<NavBar />
				<Component {...pageProps} />
				{/*<FooterComponent />*/}
			</AnimatePresence>
		</>
	)
}
