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
					<span className="policy-date">Last updated: May 28, 2026</span>
				</div>
			</section>

			<section className="policy-content">
				<div className="policy-container policy-card">
					<h2>1. Billing and Merchant of Record</h2>
					<p>
						Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of
						Record for Sabi orders. Paddle provides payment processing, tax handling, customer service
						inquiries related to payments, and handles returns where applicable.
					</p>

					<h2>2. Free Trial</h2>
					<p>
						Sabi may offer a 1-week free trial for eligible plans. You can test the product during the trial
						period before a paid subscription begins. If you do not want to be charged, cancel before the
						trial ends.
					</p>

					<h2>3. Subscription Cancellations</h2>
					<p>
						You can cancel your Sabi subscription at any time. Cancelling stops future renewal charges, but
						it does not automatically refund payments already made for the current billing period.
					</p>

					<h2>4. Refunds</h2>
					<p>
						Unless required by applicable law or approved by Paddle, paid subscription fees are generally
						non-refundable once a billing period has started. Refund requests may be reviewed case by case,
						including situations involving duplicate charges, payment errors, or material technical issues
						that prevent access to the product.
					</p>

					<h2>5. Technical Issues</h2>
					<p>
						If you experience a technical issue, contact Sabi support first so we can investigate and try to
						resolve it. If the issue cannot be resolved and it materially prevents you from using Sabi as
						described, you may request a refund review through Paddle support.
					</p>

					<h2>6. Legal Rights</h2>
					<p>
						Nothing in this policy limits any non-waivable consumer rights that apply in your country or
						region. Where local law gives you additional cancellation or refund rights, those rights continue
						to apply.
					</p>

					<h2>7. How to Request Help or a Refund</h2>
					<p>
						For product support, email Sabi at{" "}
						<a href={`mailto:${supportEmail}`}>{supportEmail}</a>. For payment, subscription, receipt, or
						refund requests, use the support link in your Paddle receipt or visit{" "}
						<a href="https://paddle.net" target="_blank" rel="noreferrer">
							paddle.net
						</a>
						.
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
