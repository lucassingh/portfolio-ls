import FooterComponent from '@/components/footer/FooterComponent'
import NavBar from '@/components/header'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
	return (
		<>
			<NavBar />
			<Component {...pageProps} />
			{/*<FooterComponent />*/}
		</>
	)
}
