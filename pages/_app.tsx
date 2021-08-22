import type { AppProps } from 'next/app'
import '@/styles/globals.scss'
import 'public/fonts/fonts.scss'
import { withHydrate } from 'effector-next'

const enhance = withHydrate()
function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

export default enhance(App)
