import { composeStyles, style } from '@vanilla-extract/css'
import { atoms } from '@shared/styles/sprinkles.css'
import { vars } from '@shared/styles/theme.css'

export const styles = atoms({
	width: {
		mobile: 'auto',
		tablet: 'small',
		desktop: 'small',
	},
})
export const image = composeStyles(
	atoms({
		position: 'relative',
		width: {
			mobile: 'auto',
			tablet: 'small',
			desktop: 'small',
		},
		height: {
			mobile: 'small',
			desktop: 'large',
		},
	}),
	style({ left: '0', borderRadius: '30px' })
)

export const information = style({ textAlign: 'center', display: 'grid', justifyContent: 'center' })

export const name = style({
	color: vars.colors.white,
	fontWeight: 500,
	padding: '12px 0',
})
