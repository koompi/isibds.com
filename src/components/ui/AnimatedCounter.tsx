import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
	end: number;
	duration?: number;
	suffix?: string;
	prefix?: string;
}

export const AnimatedCounter = ({
	end,
	duration = 2000,
	suffix = "",
	prefix = "",
}: AnimatedCounterProps) => {
	const [count, setCount] = useState(0);
	const ref = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (!isInView) return;

		let startTime: number | null = null;
		const animateCount = (currentTime: number) => {
			if (startTime === null) startTime = currentTime;
			const progress = currentTime - startTime;
			const percentage = Math.min(progress / duration, 1);

			setCount(Math.floor(percentage * end));

			if (percentage < 1) {
				requestAnimationFrame(animateCount);
			} else {
				setCount(end);
			}
		};

		requestAnimationFrame(animateCount);
	}, [isInView, end, duration]);

	return (
		<span ref={ref}>
			{prefix}
			{count}
			{suffix}
		</span>
	);
};
