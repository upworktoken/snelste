module.exports = {
	name: "Soccer", // optional, falls back to object key
	description: "How do the websites of the soccer clubs perfrom?",
	options: {
		frequency: 60 * 1, // (in minutes), 23 hours
	},
	urls: [
		"https://realmadrid.com/",
		"https://psg.fr/",
		"https://fcbarcelona.com/"
	]
};