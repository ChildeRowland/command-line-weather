module.exports = require('yargs')
	.options('location', {
		demand: false,
		alias: 'l',
		description: 'enter city to get local weather',
		type: 'string'
	})
	.help('help')
	.argv;