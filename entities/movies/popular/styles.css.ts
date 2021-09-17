import { composeStyles, style } from '@vanilla-extract/css'
import { atoms } from '@shared/styles'

export const styles = composeStyles(
	atoms({
		background: 'dark_yellow',
		gridTemplateColumns: {
			mobile: 'auto',
			tabletS: 'medium',
			tablet: 'small',
		},
		justifyContent: 'space-between',
	}),
	style({
		display: 'grid',
		gridRowGap: '15px',
		color: 'red',
	})
)
