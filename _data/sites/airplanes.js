<<<<<<< HEAD
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
=======
json = 
[
	{
	  name:"boeing.com",
	  url:"https://boeing.com/",
	  slug:"boeing"
	},	
	{
	  name:"airbus.com",
	  url:"https://airbus.com/",
	  slug:"airbus"
	}
]

>>>>>>> 2c3f69cbb58ea4b02d5930c1bcc601436b16f851
module.exports = {
	name: "Airplanes", // optional, falls back to object key
	description: "How do the websites of the Airplane manufacturers perform?",
	options: {
		frequency: 60 * 1, // (in minutes), 23 hours
	},
	urls: json.map(el=>el.url),
<<<<<<< HEAD
	names: json.map(el=>el.name)
=======
	names: json.map(el=>el.name),
	slugs: json.map(el=>el.slug)
>>>>>>> 2c3f69cbb58ea4b02d5930c1bcc601436b16f851
};