var path = require('path');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var { resolve, rules, optimization, plugins, output, entry, mode } = require('./webpack.base.config');

// 路径
var ROOT_PATH = path.resolve(__dirname, '..');
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var APP_FILE = path.resolve(APP_PATH, 'app');

module.exports = {
	mode,
	entry: Object.assign(entry, {
		app: [ 'babel-polyfill', APP_FILE ]
	}),
	output,
	module: {
		rules
	},
	optimization: Object.assign(optimization, {
		minimizer: [ new UglifyJsPlugin({}) ]
	}),
	plugins,
	resolve
};
