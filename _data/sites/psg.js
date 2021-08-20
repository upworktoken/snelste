module.exports = {
	name: "Paris Saint-Germain", // optional, falls back to object key
	description: "Important pages on PSG.fr",
	hide:true,
	options: {
		frequency: 60 * 1, // (in minutes), 23 hours
	},
	urls: [
		"https://www.psg.fr/billetterie",
		"https://experience.psg.fr",
	],
	names: [
		"PSG Tickets",
		"PSG Stadium Tour", 
	]
};