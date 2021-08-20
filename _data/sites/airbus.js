module.exports = {
	name: "Airbus website", // optional, falls back to object key
	description: "How does the Airbus website perform?",
	hide:true,
	options: {
		frequency: 60 * 1, // (in minutes), 23 hours
	},
	urls: [
		"https://www.airbus.com/space.html",
		"https://www.airbus.com/investors/contact-us.html",
	],
	names: [
		"Airbus Space Unit",
		"Investors",
	]
};