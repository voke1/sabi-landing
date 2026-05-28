import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, FileSpreadsheet, MessageSquareWarning, ReceiptText } from "lucide-react";
import { Reveal } from "./Reveal";

const messyItems = [
	{ icon: MessageSquareWarning, label: "Unread WhatsApp thread", detail: "Customer still waiting" },
	{ icon: FileSpreadsheet, label: "Old product list", detail: "Prices changed" },
	{ icon: ReceiptText, label: "Manual follow-up", detail: "Owner memory only" },
];

const cleanItems = ["Business knowledge synced", "AI replies customers", "Owner can step in anytime"];

export function ChaosToCommand() {
	const prefersReducedMotion = useReducedMotion();

	return (
		<section className="section chaos-section">
			<div className="section-inner chaos-layout">
				<Reveal className="section-heading left">
					<span className="eyebrow dark">From chaos to command</span>
					<h2>Replace scattered customer work with a system that stays awake.</h2>
					<p>
						Sabi does not ask SMBs to become software operators. It turns the channels they already use
						into a controlled AI assistant that can answer, escalate, and stay current.
					</p>
				</Reveal>

				<Reveal className="transformation-stage">
					<div className="messy-stack">
						{messyItems.map((item, index) => {
							const Icon = item.icon;
							return (
								<motion.div
									className="messy-note"
									key={item.label}
									animate={prefersReducedMotion ? undefined : { x: [0, index % 2 === 0 ? 10 : -10, 0] }}
									transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
								>
									<Icon size={20} aria-hidden="true" />
									<strong>{item.label}</strong>
									<span>{item.detail}</span>
								</motion.div>
							);
						})}
					</div>

					<div className="sync-rail" aria-hidden="true">
						<span />
					</div>

					<div className="clean-stack">
						{cleanItems.map((item) => (
							<div className="clean-item" key={item}>
								<CheckCircle2 size={20} aria-hidden="true" />
								<span>{item}</span>
							</div>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	);
}
