'use strict';

var argv = require('./yargs.js');
var getLocation = require('./location.js');
var getWeather = require('./open-weather.js');


if ( typeof(argv.l) === 'string' && argv.l.length > 0 ) {

	getWeather(argv.l).then(function onSuccess(success) {
		console.log(success);
	}, function onError(error) {
		console.log(error);
	});

} else {

	getLocation().then(function onSuccess(success) {
		getWeather(success).then(function onSuccess(success) {
			console.log(success);
		}, function onError(error) {
			console.log(error);
		});

	}, function onError(error) {
		console.log(error);
	});
}

