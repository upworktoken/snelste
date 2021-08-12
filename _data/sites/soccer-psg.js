module.exports = {
	name: "Paris Saint-Germain", // optional, falls back to object key
	description: "The important pages on psg.fr.",
	hide:true,
	options: {
		frequency: 60 * 1, // (in minutes), 23 hours
	},
	urls: [
		"https://en.psg.fr/shop",
		"https://en.psg.fr/myparissaintgermain",
		"https://en.experience.psg.fr/",
		"https://billetterie.psg.fr/",
	]
};