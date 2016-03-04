var openWeatherApi = require('./apikeys.js');
var request = require('request');


function getWeather (location) {
	return new Promise(function (resolve, reject) {
		if (!location) {
			return reject('No location provided');
		}

		var encodedLocation = encodeURIComponent(location);
		var url = 'http://api.openweathermap.org/data/2.5/weather?q=' 
				  + encodedLocation 
				  + '&units=imperial&appid=' 
				  + openWeatherApi;

		request({ 
			url: url,
			json: true		
		}, function (error, responce, body) {
			if (error) {
				reject('Unable to get weather');
			} else {
				var currentTemp = body.main.temp;
				var city = body.name;
				resolve(`The current temperature in ${city} is ${currentTemp} degrees fahrenheit.`);
			}
		});
	});
}


getWeather('').then(function onSuccess (success) {
	console.log(success);
}, function onError (error) {
	console.log(error);
});

getWeather('New London').then(function onSuccess (success) {
	console.log(success);
}, function onError (error) {
	console.log(error);
});



function message () {
	console.log("Errors made");
}

function doWork (data, callback) {
	callback('callback done');
}

function doPromiseWork (data) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			reject({
				message: 'everything breaks',
				action: message()
			});
		}, 1500);
		
		// reject({});
	});
}

doPromiseWork('some data').then(function onSuccess (data) {
	console.log(data);
}, function onError (error) {
	console.log(error.message);
	return error.action;
})