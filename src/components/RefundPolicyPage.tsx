import { Mail } from "lucide-react";
import { privacyUrl, supportEmail, termsUrl } from "../data/site-data";

export function RefundPolicyPage() {
	return (
		<main className="policy-page">
			<section className="policy-hero">
				<div className="policy-container">
					<span className="eyebrow dark">Sabi policy</span>
					<h1>Refund Policy</h1>
					<p>
						This policy explains how refunds, cancellations, and subscription access work for Sabi, an AI
						WhatsApp assistant for small and medium-sized businesses.
					</p>
					<span className="policy-date">Last updated: November 1, 2026</span>
				</div>
			</section>

			<section className="policy-content">
				<div className="policy-container policy-card">
					<h2>1. Billing and Payments</h2>
					<p>
						Payments made in the Sabi app are processed through Paystack. The plan price and currency are
						shown before you choose to pay.
					</p>

					<h2>2. Free Trial</h2>
					<p>
						Sabi may offer a free trial for eligible users. You can test the bot during the trial period.
						When the trial ends, the bot pauses until you choose and pay for a plan. The trial does not
						charge you automatically.
					</p>

					<h2>3. Paid Access</h2>
					<p>
						A successful payment gives you access for the paid period shown in the app. If you do not buy
						another period, your bot may pause when that period ends. Stopping use does not automatically
						refund a payment already made.
					</p>

					<h2>4. Refunds</h2>
					<p>
						Unless required by applicable law, payments for a period that has started are generally
						non-refundable. Sabi reviews requests case by case, including duplicate charges, payment errors,
						or material technical issues that prevent access to the product.
					</p>

					<h2>5. Technical Issues</h2>
					<p>
						If you experience a technical issue, contact Sabi support first so we can investigate and try to
						resolve it. If the issue cannot be resolved and it materially prevents you from using Sabi as
						described, you may request a refund review from Sabi support.
					</p>

					<h2>6. Legal Rights</h2>
					<p>
						Nothing in this policy limits any non-waivable consumer rights that apply in your country or
						region. Where local law gives you additional cancellation or refund rights, those rights continue
						to apply.
					</p>

					<h2>7. How to Request Help or a Refund</h2>
					<p>
						For product support, payment questions, receipt help, or a refund request, email Sabi at{" "}
						<a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
					</p>

					<div className="policy-actions">
						<a className="primary-button contact-email" href={`mailto:${supportEmail}`}>
							<Mail size={18} aria-hidden="true" />
							Contact support
						</a>
						<a className="secondary-button" href={termsUrl} target="_blank" rel="noreferrer">
							Terms of Service
						</a>
						<a className="secondary-button" href={privacyUrl} target="_blank" rel="noreferrer">
							Privacy Policy
						</a>
					</div>
				</div>
			</section>
		</main>
	);
}
