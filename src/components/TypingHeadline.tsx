import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const headlinePhrases = [
	"Let WhatsApp answer customers for you.",
	"Keep customers moving, even after closing time.",
	"Never miss a customer on WhatsApp again.",
	"Put your business on autopilot inside WhatsApp.",
	"Sell faster with an AI assistant on WhatsApp.",
	"Make WhatsApp handle the questions you repeat daily.",
];

type TypingMode = "typing" | "holding" | "deleting" | "waiting";

export function TypingHeadline() {
	const prefersReducedMotion = useReducedMotion();
	const [phraseIndex, setPhraseIndex] = useState(0);
	const [characterCount, setCharacterCount] = useState(headlinePhrases[0].length);
	const [mode, setMode] = useState<TypingMode>("holding");

	useEffect(() => {
		if (prefersReducedMotion) return undefined;

		const phrase = headlinePhrases[phraseIndex];
		const delay = mode === "typing" ? 36 : mode === "deleting" ? 18 : mode === "waiting" ? 120 : 8000;

		const timer = window.setTimeout(() => {
			if (mode === "waiting") {
				setPhraseIndex((current) => (current + 1) % headlinePhrases.length);
				setMode("typing");
				return;
			}

			if (mode === "holding") {
				setMode("deleting");
				return;
			}

			if (mode === "typing") {
				if (characterCount < phrase.length) {
					setCharacterCount((current) => current + 1);
					return;
				}

				setMode("holding");
				return;
			}

			if (characterCount > 0) {
				setCharacterCount((current) => current - 1);
				return;
			}

			setMode("waiting");
		}, delay);

		return () => window.clearTimeout(timer);
	}, [characterCount, mode, phraseIndex, prefersReducedMotion]);

	const phrase = headlinePhrases[phraseIndex];
	const displayText = prefersReducedMotion ? headlinePhrases[0] : phrase.slice(0, characterCount);

	return (
		<span className="typing-headline" aria-label={phrase}>
			<span aria-hidden="true">{displayText}</span>
			<span className="typing-cursor" aria-hidden="true" />
		</span>
	);
}
