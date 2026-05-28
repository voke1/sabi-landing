import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { businessStats, businessTypes } from "../data/site-data";
import { Reveal } from "./Reveal";

export function BusinessTypes() {
	const prefersReducedMotion = useReducedMotion();
	const animatedTypes = [...businessTypes, ...businessTypes];

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
					<div className="brand-rail-mask">
						<motion.div
							className="brand-rail"
							animate={prefersReducedMotion ? undefined : { y: ["0%", "-50%"] }}
							transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
						>
							{animatedTypes.map((type, index) => (
								<span className={index % 3 === 0 ? "is-strong" : ""} key={`${type}-${index}`}>
									{type}
								</span>
							))}
						</motion.div>
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
