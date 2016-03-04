'use strict';

var openWeatherApi = require('./apikeys.js');
var request = require('request');


module.exports = function (location) {
	return new Promise(function (resolve, reject) {
		if ( !location ) {
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
			if ( error ) {
				reject('Unable to provide weather');
			} else {
				var city = body.name;
				var temp = body.main.temp;
				var userWeather = `The current temperature in ${city} is ${temp} degrees fahrenheit.`
				resolve(userWeather);
			}
		})			  
	});
};