type CurrencyConfig = {
	currency: string;
	rateFromUsd: number;
	roundTo: number;
};

export type PricingLocation = CurrencyConfig & {
	locale: string;
	region: string;
	regionLabel: string;
};

const fallbackLocation: PricingLocation = {
	currency: "USD",
	locale: "en-US",
	rateFromUsd: 1,
	region: "US",
	regionLabel: "United States",
	roundTo: 1,
};

const currencyByRegion: Record<string, CurrencyConfig> = {
	AU: { currency: "AUD", rateFromUsd: 1.5, roundTo: 1 },
	CA: { currency: "CAD", rateFromUsd: 1.35, roundTo: 1 },
	GB: { currency: "GBP", rateFromUsd: 0.8, roundTo: 1 },
	GH: { currency: "GHS", rateFromUsd: 11, roundTo: 1 },
	IN: { currency: "INR", rateFromUsd: 83, roundTo: 10 },
	KE: { currency: "KES", rateFromUsd: 130, roundTo: 10 },
	NG: { currency: "NGN", rateFromUsd: 1500, roundTo: 500 },
	PH: { currency: "PHP", rateFromUsd: 57, roundTo: 10 },
	US: { currency: "USD", rateFromUsd: 1, roundTo: 1 },
	ZA: { currency: "ZAR", rateFromUsd: 18, roundTo: 1 },
};

const euroRegions = new Set([
	"AT",
	"BE",
	"CY",
	"DE",
	"EE",
	"ES",
	"FI",
	"FR",
	"GR",
	"HR",
	"IE",
	"IT",
	"LT",
	"LU",
	"LV",
	"MT",
	"NL",
	"PT",
	"SI",
	"SK",
]);

const timezoneRegionHints: Record<string, string> = {
	"Africa/Accra": "GH",
	"Africa/Johannesburg": "ZA",
	"Africa/Lagos": "NG",
	"Africa/Nairobi": "KE",
	"America/New_York": "US",
	"America/Los_Angeles": "US",
	"America/Chicago": "US",
	"America/Toronto": "CA",
	"Asia/Kolkata": "IN",
	"Asia/Manila": "PH",
	"Australia/Sydney": "AU",
	"Europe/London": "GB",
};

const regionLabels: Record<string, string> = {
	AU: "Australia",
	CA: "Canada",
	EU: "Europe",
	GB: "United Kingdom",
	GH: "Ghana",
	IN: "India",
	KE: "Kenya",
	NG: "Nigeria",
	PH: "Philippines",
	US: "United States",
	ZA: "South Africa",
};

const localeByRegion: Record<string, string> = {
	AU: "en-AU",
	CA: "en-CA",
	EU: "en-IE",
	GB: "en-GB",
	GH: "en-GH",
	IN: "en-IN",
	KE: "en-KE",
	NG: "en-NG",
	PH: "en-PH",
	US: "en-US",
	ZA: "en-ZA",
};

function getBrowserLocale() {
	if (typeof navigator === "undefined") return fallbackLocation.locale;
	return navigator.languages?.[0] || navigator.language || fallbackLocation.locale;
}

function getRegionFromLocale(locale: string) {
	try {
		return new Intl.Locale(locale).region;
	} catch {
		return undefined;
	}
}

function getDetectedRegion(locale: string) {
	const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	const timezoneRegion = timezone ? timezoneRegionHints[timezone] : undefined;
	const localeRegion = getRegionFromLocale(locale);

	if (timezoneRegion) return timezoneRegion;
	if (localeRegion && euroRegions.has(localeRegion)) return "EU";
	return localeRegion;
}

function getCurrencyConfig(region?: string) {
	if (!region) return fallbackLocation;
	if (region === "EU" || euroRegions.has(region)) {
		return { currency: "EUR", rateFromUsd: 0.92, roundTo: 1 };
	}
	return currencyByRegion[region] || fallbackLocation;
}

function roundPrice(value: number, roundTo: number) {
	return Math.max(roundTo, Math.round(value / roundTo) * roundTo);
}

export function detectPricingLocation(): PricingLocation {
	const locale = getBrowserLocale();
	const region = getDetectedRegion(locale) || fallbackLocation.region;
	const config = getCurrencyConfig(region);

	return {
		...config,
		locale: localeByRegion[region] || locale,
		region,
		regionLabel: regionLabels[region] || region,
	};
}

export function formatMonthlyPrice(monthlyUsd: number, location: PricingLocation, monthlyNgn?: number) {
	const price =
		location.currency === "NGN" && monthlyNgn
			? monthlyNgn
			: roundPrice(monthlyUsd * location.rateFromUsd, location.roundTo);

	return new Intl.NumberFormat(location.locale, {
		currency: location.currency,
		maximumFractionDigits: 0,
		style: "currency",
	}).format(price);
}
