module.exports = {
	name: "Planes", // optional, falls back to object key
	description: "How do the websites of the Airplane manufacturers perform?",
	options: {
		frequency: 60 * 23, // (in minutes), 23 hours
	},
	urls: [
		"https://www.boeing.com/",
		"https://www.airbus.com/",
	]
};