module.exports = {
	name: "Yandex", // optional, falls back to object key
	description: "How do Yandex pages perform? ",
	hide:true,
	options: {
		frequency: 60 * 1, // (in minutes), 23 hours
	},
	urls: [
	 "https://yandex.ua/tune/geo",
	 "https://passport.yandex.ua/",
	],
	names: [
	 "https://yandex.ua/tune/geo",
	 "https://passport.yandex.ua/",
	]
};