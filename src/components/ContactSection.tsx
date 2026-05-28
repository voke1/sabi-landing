import { Mail, MessageSquareText, Send } from "lucide-react";
import { GooglePlayButton } from "./GooglePlayButton";
import { Reveal } from "./Reveal";

const contactCards = [
	{
		icon: MessageSquareText,
		title: "Setup questions",
		copy: "For business owners who want help getting the first WhatsApp assistant live.",
	},
	{
		icon: Send,
		title: "Partnerships",
		copy: "For agencies, communities, and operators bringing Sabi to more SMBs.",
	},
];

export function ContactSection() {
	return (
		<section className="section contact-section" id="contact">
			<div className="section-inner contact-layout">
				<Reveal className="contact-copy">
					<span className="eyebrow dark">Contact us</span>
					<h2>Need Sabi for your business or community?</h2>
					<p>
						Reach out for setup support, partnership conversations, or help choosing the right plan for your
						customer-chat volume.
					</p>
					<div className="contact-actions">
						<a className="primary-button contact-email" href="mailto:hello@go2sabi.com?subject=Sabi%20business%20support">
							<Mail size={18} aria-hidden="true" />
							hello@go2sabi.com
						</a>
						<GooglePlayButton className="compact" />
					</div>
				</Reveal>

				<div className="contact-card-grid">
					{contactCards.map((card, index) => {
						const Icon = card.icon;

						return (
							<Reveal className="contact-card" delay={index * 0.08} key={card.title}>
								<Icon size={24} aria-hidden="true" />
								<h3>{card.title}</h3>
								<p>{card.copy}</p>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}
