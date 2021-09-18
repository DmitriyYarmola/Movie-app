import { composeStyles, style } from '@vanilla-extract/css'
import { atoms } from '@shared/styles'

export const styles = composeStyles(
	atoms({
		background: 'dark_yellow',
	}),
	style({
		display: 'grid',
		gridRowGap: '15px',
		color: 'red',
	})
)
