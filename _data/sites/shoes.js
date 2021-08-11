module.exports = {
	name: "Shoes", // optional, falls back to object key
	description: "How do the websites of the Nike and Adidas perform?",
	options: {
		frequency: 60 * 23, // (in minutes), 23 hours
	},
	urls: [
		"https://www.adidas.com/",
		"https://www.nike.com/",
	]
};