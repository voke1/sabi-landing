import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navItems, playStoreUrl } from "../data/site-data";

export function NavBar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const isHomePage = typeof window === "undefined" || window.location.pathname === "/";
	const getSectionHref = (href: string) => (isHomePage ? href : `/${href}`);

	return (
		<header className="site-nav" aria-label="Main navigation">
			<a className="brand-lockup" href={isHomePage ? "#top" : "/"} aria-label="Sabi home">
				<span className="sabi-wordmark" aria-label="Sabi">
					SABI
					<span aria-hidden="true" />
				</span>
			</a>

			<nav className={`nav-links ${menuOpen ? "nav-links-open" : ""}`} id="site-navigation" aria-label="Page sections">
				{navItems.map((item) => (
					<a key={item.href} href={getSectionHref(item.href)} onClick={() => setMenuOpen(false)}>
						{item.label}
					</a>
				))}
				<a className="nav-mobile-download" href={playStoreUrl} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
					Download Sabi
				</a>
			</nav>

			<div className="nav-actions">
				<a className="nav-cta" href={playStoreUrl} target="_blank" rel="noreferrer">
					<span className="play-mark nav-play-mark" aria-hidden="true">
						<span className="play-mark-green" />
						<span className="play-mark-blue" />
						<span className="play-mark-yellow" />
						<span className="play-mark-red" />
					</span>
					<span>Download</span>
					<ArrowUpRight size={16} aria-hidden="true" />
				</a>
				<button
					className="icon-button mobile-menu"
					type="button"
					aria-label={menuOpen ? "Close navigation" : "Open navigation"}
					aria-controls="site-navigation"
					aria-expanded={menuOpen}
					onClick={() => setMenuOpen((open) => !open)}
				>
					{menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
				</button>
			</div>
		</header>
	);
}
