import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { businessStats, businessTypes } from "../data/site-data";
import { Reveal } from "./Reveal";

export function BusinessTypes() {
	const prefersReducedMotion = useReducedMotion();
	const [activeIndex, setActiveIndex] = useState(0);
	const focusItems = useMemo(() => {
		const offsets = [-2, -1, 0, 1, 2];

		return offsets.map((offset) => {
			const index = (activeIndex + offset + businessTypes.length) % businessTypes.length;
			return { offset, type: businessTypes[index] };
		});
	}, [activeIndex]);

	useEffect(() => {
		if (prefersReducedMotion) return undefined;

		const timer = window.setInterval(() => {
			setActiveIndex((current) => (current + 1) % businessTypes.length);
		}, 2200);

		return () => window.clearInterval(timer);
	}, [prefersReducedMotion]);

	return (
		<section className="section brands-section" id="brands">
			<div className="section-inner brands-layout">
				<Reveal className="brands-copy">
					<span className="eyebrow dark">Who Sabi is for</span>
					<h2>
						Made for SMBs that sell, support, and follow up in <span>WhatsApp.</span>
					</h2>
					<p>
						From Nigerian sellers to global service teams, Sabi gives chat-first businesses a faster way to
						answer buyers without losing the owner’s voice.
					</p>

					<div className="business-stats">
						{businessStats.map((stat) => (
							<div className="business-stat" key={stat.label}>
								<strong>{stat.value}</strong>
								<span>{stat.label}</span>
							</div>
						))}
					</div>
				</Reveal>

				<Reveal className="brand-motion-panel">
					<div className="brand-focus-stage" aria-live="polite">
						<AnimatePresence mode="popLayout" initial={false}>
							<motion.div
								className="brand-focus-stack"
								key={activeIndex}
								initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
								animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
								exit={prefersReducedMotion ? undefined : { opacity: 0, y: -28 }}
								transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
							>
								{focusItems.map((item) => (
									<span
										className={item.offset === 0 ? "is-active" : ""}
										key={`${item.type}-${item.offset}`}
									>
										{item.type}
									</span>
								))}
							</motion.div>
						</AnimatePresence>
					</div>
					<div className="brand-focus-count">
						<span>{String(activeIndex + 1).padStart(2, "0")}</span>
						<small>/ {businessTypes.length} SMB types</small>
					</div>
					<div className="brand-live-card">
						<MessageCircle size={20} aria-hidden="true" />
						<div>
							<strong>New buyer question</strong>
							<span>Sabi replies with your business details.</span>
						</div>
						<ArrowRight size={18} aria-hidden="true" />
					</div>
				</Reveal>
			</div>
		</section>
	);
}
