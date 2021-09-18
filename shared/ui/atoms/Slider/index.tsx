import React, { useCallback, useEffect, useRef, useState } from 'react'
import { slider, track } from './styles.css'

const initialOptions = {
	slidesToShow: 1,
	slidesToScroll: 1,
}
interface Props {
	children: React.ReactNode
	options: {
		slidesToShow?: number
		slidesToScroll?: number
	}
}
export const Slider: React.FC<Props> = ({ children, options = initialOptions }) => {
	const [elementWidth, setElementWidth] = useState<null | number>(null)
	const [currentPortionPosition, setCurrentPortionPosition] = useState<null | number>(null)
	const [trackWidth, setTrackWidth] = useState<null | number>(null)
	const trackRef = useRef<HTMLDivElement>(null)

	const changeChildrenStyles = () => {
		return React.Children.map(children, (child: any) =>
			React.cloneElement(child, {
				styles: { width: elementWidth },
			})
		)
	}

	const getTotalChildrenCount = () => {
		return React.Children.count(children)
	}

	const calculateSlideCount = () => {
		const { slidesToShow = 1 } = options
		const totalItemCount = getTotalChildrenCount()
		return totalItemCount / slidesToShow
	}

	const calculateElementWidth = useCallback(
		(trackWidth: number) => {
			const { slidesToShow = 1 } = options
			const gapSize = 10
			return trackWidth / slidesToShow - gapSize
		},
		[options]
	)

	useEffect(() => {
		const trackElement = trackRef.current
		if (trackElement) {
			const trackWidth = trackElement.offsetWidth
			const elementWidth = calculateElementWidth(trackWidth)
			setTrackWidth(trackWidth)
			setElementWidth(elementWidth)
			setCurrentPortionPosition(trackWidth)
		}
	}, [calculateElementWidth, options])

	const onClickLeftArrow = () => {
		const trackElement = trackRef.current
		if (trackElement) {
			const trackWidth = trackElement.offsetWidth
			trackElement.style.transform = `translateX(${trackWidth / 2}px)`
		}
	}

	const onClickRightArrow = () => {
		const element = trackRef.current
		if (element) {
			const trackWidth = element.offsetWidth
			setCurrentPortionPosition((prevState) => {
				const position = prevState === null ? prevState : (prevState + trackWidth) / 2
				element.style.transform = `translateX(-${position}px)`
				return position
			})
		}
	}

	return (
		<div className={slider}>
			<div onClick={onClickLeftArrow}>Slide left</div>
			<div className={track} ref={trackRef}>
				{changeChildrenStyles()}
			</div>
			<div onClick={onClickRightArrow}>Slide right</div>
		</div>
	)
}
