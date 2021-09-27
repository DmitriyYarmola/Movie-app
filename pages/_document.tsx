import { withFork } from 'effector-next'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { vars } from '@shared/styles'

const enhance = withFork({ debug: false })

class MyDocument extends Document<any> {
	render() {
		return (
			<Html>
				<Head />

				{/*SVG Sprites*/}
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 32 32'
					style={{ position: 'absolute', right: '-10px', height: 0, width: 0 }}
				>
					<defs>
						<linearGradient id='half' x1='0' x2='100%' y1='0' y2='0'>
							<stop offset='50%' stopColor={vars.colors.yellow} />
							<stop offset='50%' stopColor={vars.colors.dark_yellow} />
						</linearGradient>

						<symbol xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' id='star'>
							<path d='M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z' />
						</symbol>
					</defs>
					<symbol x='0px' y='0px' viewBox='0 0 492.004 492.004' id='arrow' fill='white'>
						<path
							d='M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z'
						/>
					</symbol>
					<symbol viewBox='0 0 120 120' id='dot'>
						<circle cx='60' cy='60' r='50' />
					</symbol>
				</svg>
				{/*SVG Sprites End*/}
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default enhance(MyDocument)
