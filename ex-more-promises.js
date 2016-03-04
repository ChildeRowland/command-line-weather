function getLocation (location) {
	return new Promise(function (resolve, reject) {
		if ( location ) {
			resolve(location);
		} else {
			reject(location + ' is not a valid location');
		}
	
	});
}

function getWeather (location) {
	return new Promise(function (resolve, reject) {
		if ( location.length < 3 ) {
			reject(location + ' doesn\'t sound real');
		} else {
			resolve('It\'s a real nice day in ' + location);
		}
	});
}

function weatherGetter (location) {
	getLocation(location).then(function onSuccess(success) {
		getWeather(success).then(function onSuccess(success) {
			console.log(success);
		}, function onError(error) {
			console.log(error);
		});
	}, function onError (error) {
		console.log(error);
	});
}

weatherGetter('Chicago');
weatherGetter('zz');
weatherGetter();


// examples
function doWork (data) {
	return new Promise(function (resolve, reject) {
		if ( !data ) {
			return reject('No argument given');
		}
		setTimeout(function () {
			resolve(data + ' Work done');
		}, 1122);
	});
}

doWork('first call').then(function (success) {
	console.log(success);
	return doWork('second call');
}).then(function (success) {
	console.log(success);
	return doWork();
}).then(function (success) {
	console.log('Promises Resolved');
}).catch(function onError (error) {
	console.log(error);
});