
setTimeout(function () {
	console.log('Waited 2 seconds');
}, 2000);

setTimeout(function () {
	console.log('Waited 1 second');
}, 1000);

console.log('No waiting');

console.log('Chanllege');

function printInThreeSeconds (message) {
	setTimeout(function () {
		console.log(message);
	}, 3000);
}

printInThreeSeconds('Waited 3 seconds');