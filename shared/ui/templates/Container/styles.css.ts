import { composeStyles, style } from '@vanilla-extract/css'
import { atoms } from '@shared/styles/sprinkles.css'

export const styles = composeStyles(
	atoms({
		width: {
			mobile: 'mobile',
			tabletS: 'tabletS',
			tablet: 'tablet',
			desktop: 'laptop',
		},
	}),
	style({ margin: '0 auto', padding: '0 30px' })
)
