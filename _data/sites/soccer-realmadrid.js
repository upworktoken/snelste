module.exports = {
	name: "Real Madrid Website", // optional, falls back to object key
	description: "The default sites that get tested",
	hide:true,
	options: {
		frequency: 60 * 1, // (in minutes), 23 hours
	},
	urls: [
		"https://realmadrid.com/en/tickets",
		"https://shop.realmadrid.com/",
		// "https://www.realmadrid.com/en/real-madrid-tv",
		// "https://www.realmadrid.com/en/tour-bernabeu"
	]
};