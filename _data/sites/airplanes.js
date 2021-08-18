json = [
	{
	  name:"boeingName",
	  url:"https://boeing.com/"
	},
	{
	  name:"boeing.com",
	  url:"https://boeing.com/"
	}
	]
module.exports = {
	name: "Planes", // optional, falls back to object key
	description: "How do the websites of the Airplane manufacturers perform?",
	options: {
		frequency: 60 * 1, // (in minutes), 23 hours
	},
	urls: json.map(el=>el.url),
	names: json.map(el=>el.name)
};