var ip = require('ip');
var path = require('path');

var ROOT_PATH = path.resolve(__dirname, '..');
var DIST_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
	server_host: ip.address(),
	server_port: 8080,
	production: {
		public_path: '',
		path: DIST_PATH
	},
	development: {
		public_path: '/',
		path: '/'
	}
};
