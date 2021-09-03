import { withFork } from 'effector-next'
import Document, { Html, Head, Main, NextScript } from 'next/document'

const enhance = withFork({ debug: false })

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default enhance(MyDocument)
