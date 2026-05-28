import { AmbientBackground } from "./components/AmbientBackground";
import { BusinessTypes } from "./components/BusinessTypes";
import { CommandCenter } from "./components/CommandCenter";
import { ContactSection } from "./components/ContactSection";
import { FAQSection } from "./components/FAQSection";
import { FinalCta } from "./components/FinalCta";
import { HeroScene } from "./components/HeroScene";
import { NavBar } from "./components/NavBar";
import { PricingSection } from "./components/PricingSection";
import { RefundPolicyPage } from "./components/RefundPolicyPage";
import { SetupSteps } from "./components/SetupSteps";
import { SiteFooter } from "./components/SiteFooter";

function HomePage() {
	return (
		<main>
			<HeroScene />
			<SetupSteps />
			<CommandCenter />
			<BusinessTypes />
			<PricingSection />
			<FAQSection />
			<FinalCta />
			<ContactSection />
		</main>
	);
}

export function App() {
	const isRefundPolicyPage = typeof window !== "undefined" && window.location.pathname === "/refund-policy";

	return (
		<>
			<AmbientBackground />
			<NavBar />
			{isRefundPolicyPage ? <RefundPolicyPage /> : <HomePage />}
			<SiteFooter />
		</>
	);
}
