import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type AnimatedCounterProps = {
	value: number;
	suffix?: string;
	duration?: number;
};

export function AnimatedCounter({ value, suffix = "", duration = 1300 }: AnimatedCounterProps) {
	const prefersReducedMotion = useReducedMotion();
	const [displayValue, setDisplayValue] = useState(prefersReducedMotion ? value : 0);

	useEffect(() => {
		if (prefersReducedMotion) {
			setDisplayValue(value);
			return;
		}

		let animationFrame = 0;
		const startedAt = performance.now();

		const tick = (now: number) => {
			const progress = Math.min((now - startedAt) / duration, 1);
			const easedProgress = 1 - (1 - progress) ** 3;
			setDisplayValue(Math.round(value * easedProgress));

			if (progress < 1) {
				animationFrame = requestAnimationFrame(tick);
			}
		};

		animationFrame = requestAnimationFrame(tick);

		return () => cancelAnimationFrame(animationFrame);
	}, [duration, prefersReducedMotion, value]);

	return (
		<>
			{displayValue.toLocaleString()}
			{suffix}
		</>
	);
}
