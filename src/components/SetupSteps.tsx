import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { setupSteps } from "../data/site-data";
import { Reveal } from "./Reveal";

export function SetupSteps() {
	const prefersReducedMotion = useReducedMotion();

	return (
		<section className="section setup-section" id="setup">
			<div className="section-inner">
				<Reveal className="section-heading">
					<span className="eyebrow dark">Create your bot in minutes</span>
					<h2>From business details to a live WhatsApp assistant.</h2>
					<p>
						Sabi’s onboarding is built for busy SMB operators: provide your knowledge, connect WhatsApp,
						let the AI brain sync, then test it with a real message.
					</p>
				</Reveal>

				<div className="setup-grid">
					{setupSteps.map((step, index) => {
						const Icon = step.icon;
						return (
							<Reveal className="setup-card" delay={index * 0.08} key={step.title}>
								<div className="setup-copy">
									<span className="setup-kicker">{step.kicker}</span>
									<Icon size={26} aria-hidden="true" />
									<h3>{step.title}</h3>
									<p>{step.copy}</p>
								</div>
								<div className="setup-screen">
									<motion.img
										src={step.image}
										alt={`${step.title} screen in the Sabi app`}
										animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
										transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
									/>
								</div>
								{index < setupSteps.length - 1 && (
									<div className="setup-connector" aria-hidden="true">
										<ArrowRight size={18} />
									</div>
								)}
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}
