import { useEffect, useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { pricingPlans } from "../data/site-data";
import { detectBestPricingLocation, detectPricingLocation, formatMonthlyPrice } from "../lib/localized-pricing";
import { Reveal } from "./Reveal";

export function PricingSection() {
	const [pricingLocation, setPricingLocation] = useState(() => detectPricingLocation());

	useEffect(() => {
		let isMounted = true;

		detectBestPricingLocation()
			.then((location) => {
				if (isMounted) setPricingLocation(location);
			});

		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<section className="section pricing-section" id="pricing">
			<div className="section-inner">
				<Reveal className="section-heading">
					<span className="eyebrow light">Simple pricing</span>
					<h2>Start with a free trial.</h2>
					<p>Pick a plan in Sabi, test the bot, and pay securely inside the app when you are ready.</p>
				</Reveal>

				<div className="pricing-grid">
					{pricingPlans.map((plan) => (
						<Reveal className={`pricing-card ${plan.featured ? "featured" : ""}`} key={plan.name}>
							{plan.featured && (
								<div className="plan-badge">
									<Sparkles size={14} aria-hidden="true" />
									Best for growth
								</div>
							)}
							<div className="plan-head">
								<h3>{plan.name}</h3>
								<p>{plan.description}</p>
							</div>
							<div className="price-row">
								<strong>{formatMonthlyPrice(plan.monthlyUsd, pricingLocation, plan.monthlyNgn)}</strong>
								<span>{plan.period}</span>
							</div>
							<p className="plan-payment-note">Paid inside the Sabi app</p>
							<ul>
								{plan.features.map((feature) => (
									<li key={feature}>
										<Check size={18} aria-hidden="true" />
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
