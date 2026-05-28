import { ChevronDown } from "lucide-react";
import { faqItems } from "../data/site-data";
import { Reveal } from "./Reveal";

export function FAQSection() {
	return (
		<section className="section faq-section" id="faq">
			<div className="section-inner faq-layout">
				<Reveal className="section-heading left">
					<span className="eyebrow dark">FAQ</span>
					<h2>Questions before you try Sabi?</h2>
					<p>Here are the things most business owners want to know before putting AI on WhatsApp.</p>
				</Reveal>

				<div className="faq-list">
					{faqItems.map((item, index) => (
						<Reveal className="faq-item-wrap" delay={index * 0.04} key={item.question}>
							<details className="faq-item" open={index === 0}>
								<summary>
									<span>{item.question}</span>
									<ChevronDown size={20} aria-hidden="true" />
								</summary>
								<p>{item.answer}</p>
							</details>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
