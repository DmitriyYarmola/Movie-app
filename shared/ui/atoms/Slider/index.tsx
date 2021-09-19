import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { slider, track } from './styles.css'

const initialOptions = {
	slidesToShow: 1,
	slidesToScroll: 1,
}
interface Props {
	children: React.ReactNode
	options?: {
		slidesToShow?: number
		slidesToScroll?: number
		gap?: number
	}
}
export const Slider: React.FC<Props> = ({ children, options }) => {
	const formattedOptions = useMemo(() => ({ ...initialOptions, ...options }), [options])

	const [elementWidth, setElementWidth] = useState<null | number>(null)
	const [currentPortionPosition, setCurrentPortionPosition] = useState(0)
	const [trackWidth, setTrackWidth] = useState<null | number>(null)
	const [currentSlide, setCurrentSlide] = useState(0)
	const trackRef = useRef<HTMLDivElement>(null)

	const changeChildrenStyles = () => {
		return React.Children.map(children, (child: any) =>
			React.cloneElement(child, {
				styles: { minWidth: elementWidth },
			})
		)
	}

	const getTotalChildrenCount = () => {
		return React.Children.count(children)
	}

	const calculateSlideCount = useCallback(() => {
		const { slidesToShow, slidesToScroll } = formattedOptions
		const totalItemCount = getTotalChildrenCount()
		return totalItemCount / slidesToScroll - slidesToShow
	}, [formattedOptions, getTotalChildrenCount])

	const calculateElementWidth = useCallback(
		(trackWidth: number) => {
			const { slidesToShow } = formattedOptions
			const gapSize = 10
			return trackWidth / slidesToShow
		},
		[formattedOptions]
	)

	const calculateSliderScrollToRight = (prevValue: number) => {
		const { slidesToScroll } = formattedOptions
		if (prevValue <= 0 && elementWidth) return prevValue - elementWidth * slidesToScroll
		if (elementWidth) return prevValue + elementWidth * slidesToScroll
		return prevValue
	}

	const calculateSliderScrollToLeft = (prevValue: number) => {
		const { slidesToScroll } = formattedOptions
		if (prevValue <= 0 && elementWidth) return -(-prevValue - elementWidth * slidesToScroll)
		if (elementWidth) return prevValue - elementWidth * slidesToScroll
		return prevValue
	}

	useEffect(() => {
		const trackElement = trackRef.current
		if (trackElement) {
			const trackWidth = trackElement.offsetWidth
			const elementWidth = calculateElementWidth(trackWidth)
			setTrackWidth(trackWidth)
			setElementWidth(elementWidth)
		}
	}, [calculateElementWidth, options])

	const onClickLeftArrow = () => {
		const element = trackRef.current
		setCurrentPortionPosition((prevState) => {
			const position = calculateSliderScrollToLeft(prevState)
			if (element) element.style.transform = `translateX(${position}px)`
			return position
		})
		setCurrentSlide((prevState) => prevState - 1)
	}

	const onClickRightArrow = () => {
		const element = trackRef.current
		setCurrentPortionPosition((prevState) => {
			const position = calculateSliderScrollToRight(prevState)
			if (element) element.style.transform = `translateX(${position}px)`
			return position
		})
		setCurrentSlide((prevState) => prevState + 1)
	}

	const isLastSlide = useMemo(() => currentSlide === calculateSlideCount(), [currentSlide, calculateSlideCount])
	const isFirstSlide = useMemo(() => currentSlide === 0, [currentSlide])
	return (
		<div className={slider}>
			{!isFirstSlide && <div onClick={onClickLeftArrow}>Slide left</div>}
			<div className={track} ref={trackRef}>
				{changeChildrenStyles()}
			</div>
			{!isLastSlide && <div onClick={onClickRightArrow}>Slide right</div>}
		</div>
	)
}
