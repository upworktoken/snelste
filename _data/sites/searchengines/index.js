module.exports = {
	name: "CategoryIndexPage of SearchEngines ", // optional, falls back to object key
	description: "How do the websites of the Searchengines perform?",
	options: {
		frequency: 60 * 23, // (in minutes), 23 hours
	},
	urls: [
		"https://www.google.com/",
		"https://yandex.ua/",
	]
};