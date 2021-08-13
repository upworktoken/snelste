module.exports = {
	name: "Boeing airplanes", // optional, falls back to object key
	description: "How does boeing website perform?",
	hide:true,
	options: {
		frequency: 60 * 1, // (in minutes), 23 hours
	},
	urls: [
	 "http://boeing.mediaroom.com/",
	 "https://www.boeing.com/contact-us.page",
	],
	names: [
		"boeing newsroom",
		"Contact us",
	]

};