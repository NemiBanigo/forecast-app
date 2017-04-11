var forecast = require('./forecast.js');
var processData = process.argv.slice(2)
 var args = [];

 processData.forEach(function(value){
 	args.push(value);
 });

 forecast.forecast(args[0],args[1]);



