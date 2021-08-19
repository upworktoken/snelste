json = 
[
	{
	  name:"fcb.com",
	  url:"https://fcbarcelona.com/",
	  slug:"fcbarcelona"
	},	
	{
	  name:"PSG",
	  url:"https://psg.fr/",
	  slug:"psg"
	}
]

module.exports = {
	name: "Soccer", // optional, falls back to object key
	description: "How do the websites of the soccer clubs perform?",
	options: {
		frequency: 60 * 1, // (in minutes), 23 hours
	},
	urls: json.map(el=>el.url),
	names: json.map(el=>el.name),
	slugs: json.map(el=>el.slug)
};