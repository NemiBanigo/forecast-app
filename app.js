var https = require("https");

https.get("https://api.darksky.net/forecast/8698d6119223261a3e71ee01901501f3/37.8267,-122.4233", function(response){
	console.log(response.statusCode);
});