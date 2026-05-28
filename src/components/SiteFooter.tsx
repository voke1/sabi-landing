import { privacyUrl, refundPolicyUrl, supportEmail, termsUrl } from "../data/site-data";

export function SiteFooter() {
	return (
		<footer className="site-footer">
			<div>
				<span>Sabi</span>
				<p>AI WhatsApp assistant for global SMBs.</p>
			</div>
			<nav className="footer-links" aria-label="Legal and support links">
				<a href={termsUrl} target="_blank" rel="noreferrer">
					Terms
				</a>
				<a href={privacyUrl} target="_blank" rel="noreferrer">
					Privacy
				</a>
				<a href={refundPolicyUrl}>Refund Policy</a>
				<a href={`mailto:${supportEmail}`}>Contact</a>
			</nav>
		</footer>
	);
}
