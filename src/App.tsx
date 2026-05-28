import { AmbientBackground } from "./components/AmbientBackground";
import { BusinessTypes } from "./components/BusinessTypes";
import { CommandCenter } from "./components/CommandCenter";
import { FAQSection } from "./components/FAQSection";
import { FinalCta } from "./components/FinalCta";
import { HeroScene } from "./components/HeroScene";
import { NavBar } from "./components/NavBar";
import { PricingSection } from "./components/PricingSection";
import { SetupSteps } from "./components/SetupSteps";

export function App() {
	return (
		<>
			<AmbientBackground />
			<NavBar />
			<main>
				<HeroScene />
				<SetupSteps />
				<CommandCenter />
				<BusinessTypes />
				<PricingSection />
				<FAQSection />
				<FinalCta />
			</main>
			<footer className="site-footer">
				<span>Sabi</span>
				<p>AI WhatsApp assistant for global SMBs.</p>
			</footer>
		</>
	);
}
