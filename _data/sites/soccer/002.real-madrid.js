module.exports = {
	name: "Real Madrid Website", // optional, falls back to object key
	description: "The default sites that get tested",
	options: {
		frequency: 60 * 23, // (in minutes), 23 hours
	},
	urls: [
		"https://www.realmadrid.com/en/tickets",
		"https://shop.realmadrid.com/",
		"https://www.realmadrid.com/en/real-madrid-tv",
		"https://www.realmadrid.com/en/tour-bernabeu"
	]
};