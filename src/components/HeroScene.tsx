import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { heroStats, motionNotes } from "../data/site-data";
import { GooglePlayButton } from "./GooglePlayButton";
import { TypingHeadline } from "./TypingHeadline";

const heroHighlights = ["Learns your business", "Replies in seconds", "Owner takeover anytime"];

export function HeroScene() {
	const prefersReducedMotion = useReducedMotion();

	return (
		<section className="hero-section" id="top">
			<div className="hero-grid" aria-hidden="true" />
			<div className="hero-signal-line line-a" aria-hidden="true" />
			<div className="hero-signal-line line-b" aria-hidden="true" />

			<div className="hero-layout">
				<div className="hero-copy">
					<motion.div
						className="eyebrow"
						initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
						animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<Sparkles size={16} aria-hidden="true" />
						AI WhatsApp bot for SMBs
					</motion.div>

					<motion.h1
						initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
						animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
						transition={{ duration: 0.75, delay: 0.08 }}
					>
						<TypingHeadline />
					</motion.h1>

					<motion.p
						className="hero-lede"
						initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
						animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
						transition={{ duration: 0.75, delay: 0.16 }}
					>
						Sabi turns your business details into an AI WhatsApp assistant in minutes. It replies fast,
						learns your offers, and lets you take over anytime.
					</motion.p>

					<motion.div
						className="hero-highlight-row"
						initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
						animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
						transition={{ duration: 0.65, delay: 0.22 }}
					>
						{heroHighlights.map((highlight) => (
							<span key={highlight}>
								<CheckCircle2 size={16} aria-hidden="true" />
								{highlight}
							</span>
						))}
					</motion.div>

					<motion.div
						className="hero-actions"
						initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
						animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
						transition={{ duration: 0.75, delay: 0.3 }}
					>
						<GooglePlayButton />
					</motion.div>

					<motion.div
						className="hero-stats"
						initial={prefersReducedMotion ? false : { opacity: 0 }}
						animate={prefersReducedMotion ? undefined : { opacity: 1 }}
						transition={{ duration: 0.75, delay: 0.4 }}
					>
						{heroStats.map((stat) => (
							<div className="hero-stat" key={stat.label}>
								<strong>{stat.value}</strong>
								<span>{stat.label}</span>
								<small>{stat.detail}</small>
							</div>
						))}
					</motion.div>
				</div>

				<motion.div
					className="hero-phone-stage"
					initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 28 }}
					animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
					transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
				>
					<motion.img
						className="hero-phone-image"
						src="./assets/app/sabi-auth-hero-cutout.png"
						alt="Sabi AI phone screen answering a customer on WhatsApp"
						animate={prefersReducedMotion ? undefined : { y: [0, -14, 0], rotate: [0, 1.2, 0] }}
						transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
					/>
				</motion.div>
			</div>

			<div className="motion-ticker" aria-label="Sabi product capabilities">
				<div className="ticker-track">
					{[...motionNotes, ...motionNotes].map((note, index) => (
						<span key={`${note}-${index}`}>{note}</span>
					))}
				</div>
			</div>
		</section>
	);
}
