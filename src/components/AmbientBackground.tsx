import { motion, useReducedMotion } from "framer-motion";

const ambientItems = [
	{ label: "AI reply", className: "ambient-item one" },
	{ label: "WhatsApp", className: "ambient-item two" },
	{ label: "Knowledge synced", className: "ambient-item three" },
	{ label: "Human takeover", className: "ambient-item four" },
	{ label: "Customer handled", className: "ambient-item five" },
	{ label: "Bot live", className: "ambient-item six" },
];

export function AmbientBackground() {
	const prefersReducedMotion = useReducedMotion();

	return (
		<div className="ambient-background" aria-hidden="true">
			{ambientItems.map((item, index) => (
				<motion.span
					className={item.className}
					key={item.label}
					animate={
						prefersReducedMotion
							? undefined
							: {
									x: [0, index % 2 === 0 ? 28 : -28, 0],
									y: [0, index % 2 === 0 ? -34 : 34, 0],
									rotate: [0, index % 2 === 0 ? 3 : -3, 0],
								}
					}
					transition={{ duration: 12 + index * 1.4, repeat: Infinity, ease: "easeInOut" }}
				>
					{item.label}
				</motion.span>
			))}
			<span className="ambient-line ambient-line-a" />
			<span className="ambient-line ambient-line-b" />
		</div>
	);
}
