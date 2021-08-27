
json = 
[
	{
	  name:"boeing.com the plane",
	  url:"https://boeing.com/",
	  slug:"boeing"
	},	
	{
	  name:"airbus.com",
	  url:"https://airbus.com/",
	  slug:"airbus"
	}
]

module.exports = {
	name: "Airplanes", // optional, falls back to object key
	description: "How do the websites of the Airplane manufacturers perform?",
	options: {
		frequency: 60 * 1, // (in minutes), 23 hours
	},
	urls: json.map(el=>el.url),
	names: json.map(el=>el.name),
	slugs: json.map(el=>el.slug)
};