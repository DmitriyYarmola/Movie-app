import { composeStyles, style } from '@vanilla-extract/css'
import { atoms } from '@shared/styles/sprinkles.css'
import { vars } from '@shared/styles/theme.css'

export const styles = style({})
export const image = composeStyles(
	atoms({
		position: 'relative',
		width: {
			mobile: 'auto',
			tablet: 'large',
			desktop: 'small',
		},
		height: {
			mobile: 'small',
			desktop: 'large',
		},
	}),
	style({ left: '0', borderRadius: '30px' })
)

export const information = style({
	marginLeft: '25px',
})

export const title = style({
	color: vars.colors.white,
	fontWeight: 500,
	padding: '12px 0',
})
