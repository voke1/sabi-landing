import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
	children: ReactNode;
	delay?: number;
	className?: string;
	id?: string;
};

export function Reveal({ children, delay = 0, className, id }: RevealProps) {
	const prefersReducedMotion = useReducedMotion();

	if (prefersReducedMotion) {
		return (
			<div id={id} className={className}>
				{children}
			</div>
		);
	}

	return (
		<motion.div
			id={id}
			className={className}
			initial={{ opacity: 0, y: 28 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-90px" }}
			transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
		>
			{children}
		</motion.div>
	);
}
