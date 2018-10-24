var path = require('path');
var webpack = require('webpack');
var config = require('./environments.config');
var { resolve, rules, optimization, plugins, output, entry, mode } = require('./webpack.base.config');

// 路径
var ROOT_PATH = path.resolve(__dirname, '..');
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var APP_FILE = path.resolve(APP_PATH, 'app');

module.exports = {
	mode,
	devtool: 'source-map',
	entry: Object.assign(entry, {
		app: [
			'babel-polyfill',
			`webpack-hot-middleware/client?path=${config.development.public_path}__webpack_hmr&reload=true`,
			APP_FILE
		]
	}),
	output,
	module: {
		rules
	},
	optimization: Object.assign(optimization, {
		noEmitOnErrors: true
	}),
	plugins: [ new webpack.HotModuleReplacementPlugin() ].concat(plugins),
	resolve
};
