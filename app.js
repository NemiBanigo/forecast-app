var https = require("https");

https.get("https://api.darksky.net/forecast/8698d6119223261a3e71ee01901501f3/37.8267,-122.4233", function(response){
	var info = "";
	response.on("data", function(chunk){
		info += chunk;
	});

	response.on("end",function(){
		if(response.statusCode === 200){
			try{
				var data = JSON.parse(info)
				console.log("Weather is "+data.currently.summary+" in "+data.timezone+".")
			}catch (error){
				console.log("Sorry something went wrong")
			}
		}
		else{
			console.log("Sorry, something went wrong")
		}
	});
});