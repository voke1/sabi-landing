type CurrencyConfig = {
	currency: string;
	rateFromUsd: number;
	roundTo: number;
};

export type PricingLocation = CurrencyConfig & {
	locale: string;
	region: string;
	regionLabel: string;
	source: "browser" | "fallback" | "ip";
};

const fallbackLocation: PricingLocation = {
	currency: "USD",
	locale: "en-US",
	rateFromUsd: 1,
	region: "US",
	regionLabel: "United States",
	roundTo: 1,
	source: "fallback",
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
	PL: { currency: "PLN", rateFromUsd: 4, roundTo: 1 },
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
	"Europe/Paris": "FR",
	"Europe/Warsaw": "PL",
};

const regionLabels: Record<string, string> = {
	AU: "Australia",
	CA: "Canada",
	EU: "Europe",
	FR: "France",
	GB: "United Kingdom",
	GH: "Ghana",
	IN: "India",
	KE: "Kenya",
	NG: "Nigeria",
	PH: "Philippines",
	PL: "Poland",
	US: "United States",
	ZA: "South Africa",
};

const localeByRegion: Record<string, string> = {
	AU: "en-AU",
	CA: "en-CA",
	EU: "en-IE",
	FR: "fr-FR",
	GB: "en-GB",
	GH: "en-GH",
	IN: "en-IN",
	KE: "en-KE",
	NG: "en-NG",
	PH: "en-PH",
	PL: "pl-PL",
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
	return localeRegion;
}

function getCurrencyConfig(region?: string) {
	if (!region) return fallbackLocation;
	if (region === "EU" || euroRegions.has(region)) {
		return { currency: "EUR", rateFromUsd: 0.92, roundTo: 1 };
	}
	return currencyByRegion[region] || fallbackLocation;
}

function getRegionLabel(region: string, locale: string) {
	if (regionLabels[region]) return regionLabels[region];

	try {
		return new Intl.DisplayNames([locale], { type: "region" }).of(region) || region;
	} catch {
		return region;
	}
}

function buildPricingLocation(region: string | undefined, locale: string, source: PricingLocation["source"]) {
	const normalizedRegion = region?.toUpperCase();
	const detectedRegion = normalizedRegion || fallbackLocation.region;
	const currencyRegion = euroRegions.has(detectedRegion) ? "EU" : detectedRegion;
	const config = getCurrencyConfig(currencyRegion);

	return {
		...config,
		locale: localeByRegion[detectedRegion] || localeByRegion[currencyRegion] || locale,
		region: detectedRegion,
		regionLabel: getRegionLabel(detectedRegion, locale),
		source,
	};
}

function roundPrice(value: number, roundTo: number) {
	return Math.max(roundTo, Math.round(value / roundTo) * roundTo);
}

export function detectPricingLocation(): PricingLocation {
	const locale = getBrowserLocale();
	const region = getDetectedRegion(locale) || fallbackLocation.region;

	return buildPricingLocation(region, locale, "browser");
}

type IpCountryResponse = {
	country?: string;
	country_code?: string;
	success?: boolean;
};

type IpProvider = {
	parseCountryCode: (payload: string) => string | undefined;
	url: string;
};

const ipProviders: IpProvider[] = [
	{
		url: "https://api.country.is/",
		parseCountryCode: (payload) => {
			const data = JSON.parse(payload) as IpCountryResponse;
			return data.country;
		},
	},
	{
		url: "https://get.geojs.io/v1/ip/country.json",
		parseCountryCode: (payload) => {
			const data = JSON.parse(payload) as IpCountryResponse;
			return data.country;
		},
	},
	{
		url: "https://api.ip.sb/geoip",
		parseCountryCode: (payload) => {
			const data = JSON.parse(payload) as IpCountryResponse;
			return data.country_code;
		},
	},
	{
		url: "https://ipwho.is/",
		parseCountryCode: (payload) => {
			const data = JSON.parse(payload) as IpCountryResponse;
			if (data.success === false) return undefined;
			return data.country_code;
		},
	},
	{
		url: "https://www.cloudflare.com/cdn-cgi/trace",
		parseCountryCode: (payload) => {
			const location = payload
				.split("\n")
				.find((line) => line.startsWith("loc="))
				?.replace("loc=", "");

			return location && location !== "XX" ? location : undefined;
		},
	},
];

async function fetchCountryCode(provider: IpProvider) {
	const controller = new AbortController();
	const timeout = window.setTimeout(() => controller.abort(), 2400);

	try {
		const response = await fetch(provider.url, {
			cache: "no-store",
			signal: controller.signal,
		});

		if (!response.ok) return undefined;

		return provider.parseCountryCode(await response.text())?.toUpperCase();
	} catch {
		return undefined;
	} finally {
		window.clearTimeout(timeout);
	}
}

export async function detectPricingLocationFromIp(): Promise<PricingLocation | undefined> {
	if (typeof fetch === "undefined") return undefined;

	for (const provider of ipProviders) {
		const countryCode = await fetchCountryCode(provider);
		if (countryCode) return buildPricingLocation(countryCode, localeByRegion[countryCode] || getBrowserLocale(), "ip");
	}

	return undefined;
}

export async function detectBestPricingLocation() {
	return (await detectPricingLocationFromIp()) || detectPricingLocation();
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
