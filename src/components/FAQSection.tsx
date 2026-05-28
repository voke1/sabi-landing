import { ChevronDown } from "lucide-react";
import { faqItems } from "../data/site-data";
import { Reveal } from "./Reveal";

export function FAQSection() {
	const midpoint = Math.ceil(faqItems.length / 2);
	const faqColumns = [faqItems.slice(0, midpoint), faqItems.slice(midpoint)];

	return (
		<section className="section faq-section" id="faq">
			<div className="section-inner faq-layout faq-layout-stacked">
				<Reveal className="section-heading left">
					<span className="eyebrow dark">FAQ</span>
					<h2>Questions before you try Sabi?</h2>
					<p>Here are the things most business owners want to know before putting AI on WhatsApp.</p>
				</Reveal>

				<div className="faq-columns">
					{faqColumns.map((column, columnIndex) => (
						<div className="faq-list" key={`faq-column-${columnIndex + 1}`}>
							{column.map((item, index) => {
								const itemIndex = columnIndex * midpoint + index;

								return (
									<Reveal className="faq-item-wrap" delay={itemIndex * 0.025} key={item.question}>
										<details className="faq-item" open={itemIndex === 0}>
											<summary>
												<span>{item.question}</span>
												<ChevronDown size={20} aria-hidden="true" />
											</summary>
											<p>{item.answer}</p>
										</details>
									</Reveal>
								);
							})}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
