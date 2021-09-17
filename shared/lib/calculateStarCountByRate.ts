const MAX_RATE = 10
const DIFFERENCE_BETWEEN_RATE_AND_STARS_COUNT_IN_MULTIPLY = 2
const MAX_STARS_COUNT = 5

export const calculateStarCountByRate = (rate: number): number => {
	if (rate > MAX_RATE) return MAX_STARS_COUNT
	return rate / DIFFERENCE_BETWEEN_RATE_AND_STARS_COUNT_IN_MULTIPLY
}
