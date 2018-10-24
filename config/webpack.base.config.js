var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./environments.config');

// 路径
var ROOT_PATH = path.resolve(__dirname, '..');
var APP_PATH = path.resolve(ROOT_PATH, 'src');

function resolve(track) {
	return path.join(__dirname, '..', track);
}

var mode = 'production';
var rules_css = [ 'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader' ];
if (!process.env.NODE_ENV) {
	rules_css = [ 'css-hot-loader' ].concat(rules_css);
	mode = 'development';
}

module.exports = {
	mode,
	entry: {
		
	},
	output: {
		publicPath: config[mode].public_path,
		path: config[mode].path,
		filename: '[name].[hash].js',
		chunkFilename: '[name].[hash].js'
	},
	rules: [
		{
			test: /\.js$/,
			exclude: /^node_modules$/,
			use: [ 'babel-loader' ]
		},
		{
			test: /\.jsx$/,
			exclude: /^node_modules$/,
			use: [ 'babel-loader' ]
		},
		{
			test: /\.css$/,
			use: rules_css
		},
		{
			test: /\.less$/,
			use: rules_css.concat([ 'less-loader' ])
		},
		{
			test: /\.scss$/,
			use: rules_css.concat([ 'sass-loader' ])
		},
		{
			test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
			exclude: /^node_modules$/,
			use: [
				{
					loader: 'file-loader',
					options: {
						name: 'images/[name].[hash].[ext]'
					}
				}
			]
		},
		{
			test: /\.(png|jpg|gif)$/,
			exclude: /^node_modules$/,
			use: [
				{
					loader: 'url-loader',
					options: {
						name: 'images/[name].[hash].[ext]',
						limit: 2
					}
				}
			]
		}
	],
	optimization: {
		splitChunks: {
			chunks: 'all',
			minSize: 30000,
			maxSize: 0,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '~',
			name: true,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					priority: 10,
					chunks: 'all'
				}
			}
		}
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css',
			chunkFilename: '[name].[hash].css'
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
			favicon: APP_PATH + '/public/favicon.ico',
			inject: 'body',
			hash: false
		})
	],
	resolve: {
		modules: [ resolve('src'), resolve('node_modules') ],
		extensions: [ '.json', '.js', '.vue', '.less', '.scss', '.css' ],
		alias: {
			'@src': resolve('src'),
			'@shared': resolve('src/shared'),
			'@history': resolve('src/store/location.js')
		}
	}
};
