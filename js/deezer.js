const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://deezerdevs-deezer.p.rapidapi.com/radio/%7Bid%7D",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "daaeff1d90msh022ff18c2b9867bp141978jsnfa8203728a80",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});