'use strict';

const os = require('os');

// bleno-mac acts as a shim to bleno.
if (os.platform() === 'darwin') {
	const Bleno = require('bleno/lib/bleno');
	const macBindings = require('./lib/binding.js');
	var blenoInstance = new Bleno(macBindings);
	module.exports = blenoInstance;
} else {
	module.exports = require('bleno');
}
