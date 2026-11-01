import {
	ArrowRight,
	BarChart3,
	Bot,
	Brain,
	Check,
	CircleDollarSign,
	Clock3,
	Globe2,
	Headphones,
	MessageCircle,
	PlugZap,
	RefreshCw,
	ShieldCheck,
	Sparkles,
} from "lucide-react";

export const playStoreUrl = "https://play.google.com/store/apps/details?id=com.voke.sabi";
export const termsUrl = "https://sites.google.com/view/sabitermsofservice/home";
export const privacyUrl = "https://sites.google.com/view/sabiprivacypolicy/home";
export const refundPolicyUrl = "/refund-policy/";
export const supportEmail = "hello@go2sabi.com";

export const navItems = [
	{ label: "Product", href: "#product" },
	{ label: "Setup", href: "#setup" },
	{ label: "Who it's for", href: "#brands" },
	{ label: "Pricing", href: "#pricing" },
	{ label: "FAQ", href: "#faq" },
];

export const heroStats = [
	{ label: "Setup", value: "Minutes", detail: "Create your bot without a developer." },
	{ label: "Reply speed", value: "Instant", detail: "Answer common customer questions fast." },
	{ label: "Control", value: "Human", detail: "Take over any conversation anytime." },
];

export const commandModules = [
	{
		icon: MessageCircle,
		title: "WhatsApp conversations",
		copy: "Sabi answers common questions, keeps replies consistent, and preserves the tone of your business.",
	},
	{
		icon: Brain,
		title: "Business brain",
		copy: "Train the assistant from your website or manual business details, then refresh knowledge as your offer changes.",
	},
	{
		icon: Headphones,
		title: "Human overdrive",
		copy: "Pause AI for sensitive conversations and take control when a customer needs personal attention.",
	},
	{
		icon: BarChart3,
		title: "Owner visibility",
		copy: "Track conversations, new customers, AI replies, and bot status from a clean control surface.",
	},
];

export const setupSteps = [
	{
		icon: PlugZap,
		kicker: "01",
		title: "Tell Sabi about your business",
		copy: "Add your business name, website, or manual details so Sabi understands your products, services, policies, and customer language.",
		image: "./assets/screens/bot-setup-profile.png",
	},
	{
		icon: MessageCircle,
		kicker: "02",
		title: "Connect WhatsApp Business",
		copy: "Link your WhatsApp Business number securely through Meta, then let Sabi prepare the customer-facing assistant.",
		image: "./assets/screens/connect-whatsapp.png",
	},
	{
		icon: Brain,
		kicker: "03",
		title: "Build the AI brain",
		copy: "Sabi processes your business knowledge into a bot-ready memory that can answer customer questions with context.",
		image: "./assets/screens/building-brain.png",
	},
	{
		icon: Bot,
		kicker: "04",
		title: "Test and launch",
		copy: "Send a real WhatsApp message, confirm the assistant responds correctly, then keep it live for customers.",
		image: "./assets/screens/test-bot.png",
	},
];

export const featureTiles = [
	{
		icon: Clock3,
		title: "Always-on replies",
		copy: "Give buyers instant answers after hours, during busy periods, and while your team is away.",
	},
	{
		icon: RefreshCw,
		title: "Knowledge refreshes",
		copy: "Update your bot when prices, pages, policies, or product information changes.",
	},
	{
		icon: ShieldCheck,
		title: "Controlled automation",
		copy: "Keep AI active for routine conversations and switch to human handling when context matters.",
	},
	{
		icon: Globe2,
		title: "Built for global SMBs",
		copy: "Simple enough for local operators, structured enough for growing teams across markets.",
	},
];

export const pricingPlans = [
	{
		name: "Starter",
		monthlyUsd: 10,
		monthlyNgn: 6000,
		period: "/mo",
		description: "For small teams launching their first AI WhatsApp assistant.",
		features: ["Free trial", "500 AI replies/month", "2 brain refreshes/month"],
		featured: false,
	},
	{
		name: "Pro",
		monthlyUsd: 40,
		monthlyNgn: 20000,
		period: "/mo",
		description: "For growing SMBs with more customer volume and bot memory needs.",
		features: ["Free trial", "Unlimited AI replies/month", "Unlimited brain refreshes/month"],
		featured: true,
	},
];

export const trustSignals = [
	{ icon: Check, label: "Live on Google Play" },
	{ icon: Sparkles, label: "AI-ready onboarding" },
	{ icon: CircleDollarSign, label: "Regional billing in app" },
	{ icon: ArrowRight, label: "Minutes to first test" },
];

export const testimonial = {
	quote:
		"Sabi is built for the kind of business owner who wants customer conversations handled fast, but still wants control when the moment matters.",
		name: "Sabi product team",
		role: "Built for SMB operators",
};

export const appScreens = [
	{
		src: "./assets/screens/home-dashboard.png",
		alt: "Sabi home dashboard showing bot status and business metrics",
		label: "Dashboard",
	},
	{
		src: "./assets/screens/ai-conversation.png",
		alt: "Sabi AI conversation screen with customer messages",
		label: "AI conversations",
	},
	{
		src: "./assets/screens/test-bot.png",
		alt: "Sabi test bot screen with WhatsApp launch QR code",
		label: "Launch test",
	},
];

export const motionNotes = [
	"Live customer feed",
	"AI brain sync",
	"WhatsApp handoff",
	"Owner controls",
	"Bot status",
	"Knowledge refresh",
	"Reply limits",
	"Push alerts",
];

export const businessTypes = [
	"Fashion sellers",
	"Beauty & skincare",
	"Hair vendors",
	"Food vendors",
	"Restaurants",
	"Bakers",
	"Supermarkets",
	"Pharmacies",
	"Health clinics",
	"Dental practices",
	"Repair shops",
	"Auto services",
	"Home services",
	"Cleaning services",
	"Laundry services",
	"Coaches",
	"Tutors",
	"Course creators",
	"Online stores",
	"Gadget sellers",
	"Thrift sellers",
	"Boutiques",
	"Real estate teams",
	"Short-let hosts",
	"Hotels",
	"Event vendors",
	"Photographers",
	"Travel agents",
	"Logistics teams",
	"Agencies",
	"Accountants",
	"Legal offices",
	"Interior decorators",
	"Furniture makers",
];

export const businessStats = [
	{ value: "24/7", label: "customer replies" },
	{ value: "0.4s", label: "AI-style response feel" },
	{ value: "Free", label: "trial available" },
];

export const faqItems = [
	{
		question: "What exactly does Sabi do?",
		answer:
			"Sabi helps you create an AI assistant for WhatsApp. It learns your business details, answers common customer questions, and lets you step in when a conversation needs a real person.",
	},
	{
		question: "Do I need technical skills to set it up?",
		answer:
			"No. The setup is built for business owners. Add your business info, connect WhatsApp Business, let Sabi build the AI brain, then test the bot before customers use it.",
	},
	{
		question: "Can I control what the AI says?",
		answer:
			"Yes. You can update your business knowledge, refresh the bot, test replies, and pause AI handling when you want to take over the chat yourself.",
	},
	{
		question: "Can a customer still talk to a human?",
		answer:
			"Yes. Sabi is built for controlled automation. The assistant handles routine questions, while you can step in when a chat needs personal judgment or a human touch.",
	},
	{
		question: "What business details should I add?",
		answer:
			"Add your products or services, prices, delivery areas, opening hours, refund policy, booking process, FAQs, and anything customers usually ask before buying.",
	},
	{
		question: "Can I update prices or policies later?",
		answer:
			"Yes. When your offer changes, update your business knowledge and refresh the bot so customer replies stay aligned with your current details.",
	},
	{
		question: "Does Sabi replace my WhatsApp Business account?",
		answer:
			"No. Sabi connects to your WhatsApp Business flow so your customer conversations can be answered faster while you still keep owner control.",
	},
	{
		question: "Is Sabi only for Nigerian businesses?",
		answer:
			"No. Sabi is useful for Nigerian SMBs and global SMBs that already sell, support, or follow up with customers on WhatsApp.",
	},
	{
		question: "Who is Sabi best for?",
		answer:
			"Sabi fits chat-first SMBs like fashion sellers, beauty brands, food vendors, clinics, real estate teams, repair shops, service providers, agencies, and online stores.",
	},
	{
		question: "How does the free trial work?",
		answer:
			"Starter and Pro offer a free trial, so you can create the bot, connect your flow, and test if it fits your business before committing.",
	},
	{
		question: "Where do I pay for Sabi?",
		answer:
			"Payment happens inside the app. Pricing is shown based on your location where supported, including naira pricing for Nigerian users.",
	},
	{
		question: "What is the difference between Starter and Pro?",
		answer:
			"Starter is for smaller teams getting started with limited monthly AI replies and brain refreshes. Pro is for growing businesses that need higher volume and unlimited refreshes.",
	},
	{
		question: "What happens if the assistant does not know an answer?",
		answer:
			"You can improve the bot by adding the missing detail to your business knowledge, refreshing the brain, and taking over the chat when needed.",
	},
];
