var request = require('request');
var url = 'http://ipinfo.io';

module.exports = function () {
	return new Promise(function (resolve, reject) {
		request({
			url: url,
			json: true
		}, function (error, responce, body) {
			if ( error ) {
				reject('error getting location by ip address');
			} else {
				resolve(body.city);
			}
		});
	});
};