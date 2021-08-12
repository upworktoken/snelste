module.exports = {
	name: "Google website", // optional, falls back to object key
	description: "How does Google website perform.",
	hide:true,
	options: {
		frequency: 60 * 1, // (in minutes), 23 hours
	},
	urls: [
	"https://www.google.com/intl/en_nl/ads/",
	"https://about.google/",
	]
};