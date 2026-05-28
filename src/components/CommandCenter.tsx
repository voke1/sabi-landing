import { motion, useReducedMotion } from "framer-motion";
import { commandModules, featureTiles } from "../data/site-data";
import { Reveal } from "./Reveal";

export function CommandCenter() {
	const prefersReducedMotion = useReducedMotion();

	return (
		<section className="section section-cream" id="product">
			<div className="section-inner">
				<Reveal className="section-heading narrow">
					<span className="eyebrow dark">Operations interface</span>
					<h2>One assistant for the conversations that move your business.</h2>
					<p>
						Sabi connects the messy reality of customer questions, WhatsApp threads, business knowledge,
						and owner decisions into one reliable AI workflow.
					</p>
				</Reveal>

				<div className="command-layout">
					<div className="command-modules">
						{commandModules.map((module, index) => {
							const Icon = module.icon;
							return (
								<Reveal className="module-card" delay={index * 0.05} key={module.title}>
									<Icon size={24} aria-hidden="true" />
									<h3>{module.title}</h3>
									<p>{module.copy}</p>
								</Reveal>
							);
						})}
					</div>

					<Reveal className="phone-showcase">
						<motion.img
							src="./assets/stitch/product-hero-light.png"
							alt="Stitch-generated Sabi product hero showing AI WhatsApp chat automation"
							animate={prefersReducedMotion ? undefined : { y: [0, -10, 0] }}
							transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
						/>
						<div className="phone-data-card top">
							<span>Bot status</span>
							<strong>AI active</strong>
						</div>
						<div className="phone-data-card bottom">
							<span>Customers</span>
							<strong>+24 this week</strong>
						</div>
					</Reveal>
				</div>

				<div className="feature-strip" aria-label="Sabi feature highlights">
					{featureTiles.map((feature) => {
						const Icon = feature.icon;
						return (
							<div className="feature-tile" key={feature.title}>
								<Icon size={22} aria-hidden="true" />
								<h3>{feature.title}</h3>
								<p>{feature.copy}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
