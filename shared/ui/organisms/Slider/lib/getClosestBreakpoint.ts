import { ResponsiveOptions } from '../interface'

export const getClosestBreakpoint = (array: ResponsiveOptions[], goal: number) => {
	return array?.reduce(
		(prev, curr) => (Math.abs(curr.breakpoint - goal) < Math.abs(prev.breakpoint - goal) ? curr : prev),
		array[0]
	)
}
