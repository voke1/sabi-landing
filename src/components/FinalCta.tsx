import { GooglePlayButton } from "./GooglePlayButton";
import { Reveal } from "./Reveal";

export function FinalCta() {
	return (
		<section className="final-cta">
			<Reveal className="final-cta-inner">
				<span className="eyebrow light">Ready when customers are</span>
				<h2>Put Sabi on your business WhatsApp flow.</h2>
				<p>
					Download the app, create your business bot, and test the first AI customer conversation in minutes.
				</p>
				<div className="hero-actions center">
					<GooglePlayButton className="compact" />
				</div>
			</Reveal>
		</section>
	);
}
