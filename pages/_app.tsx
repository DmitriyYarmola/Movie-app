import type { AppProps } from 'next/app'
import { withHydrate } from 'effector-next'
import '@shared/styles/global.css'
import '@app/fonts'

const enhance = withHydrate()
function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

export default enhance(App)
