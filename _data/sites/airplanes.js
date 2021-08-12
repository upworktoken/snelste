module.exports = {
	name: "Planes", // optional, falls back to object key
	description: "How do the websites of the Airplane manufacturers perform?",
	options: {
		frequency: 60 * 1, // (in minutes), 23 hours
	},
	urls: [
		"https://boeing.com/",
		"https://airbus.com/",
	]
};