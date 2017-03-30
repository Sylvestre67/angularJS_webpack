const path = require('path');
const webpack = require('webpack');

const LiveReloadPlugin = require('webpack-livereload-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCss = new ExtractTextPlugin({
	filename: '[contenthash].css',
});

module.exports = {
	context: path.resolve(__dirname, 'app'),
	entry: './oss.module.js',
	output:{
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	resolve:{
		modules:[
			path.resolve(__dirname, 'app'),
			path.resolve(__dirname, 'app/utils'), // in order to resolve from the root as well.
			'node_modules'
		]
	},
	module:{
		rules:[
			{
				test: /\.js$/,
				use: ['ng-annotate-loader','babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: extractCss.extract({
					fallback: 'style-loader',
					use: {
						loader: 'css-loader',
						options:{
							sourceMap:true,
							minimize:true,
						}
					},
				})
			},
			{
				test: /\.scss$/,
				use: extractCss.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options:{
								minimize:true,
							}
						},
						{
							loader: 'sass-loader',
						}
					],
				})
			},
			{
				test: /\.less$/,
				use: extractCss.extract({
						fallback: 'style-loader',
						use: [
							{
								loader: 'css-loader',
								options:{
									minimize:true,
									sourceMap:true
								}
							},
							{
								loader: 'less-loader',
								options:{
									sourceMap: true,
									paths: [
										path.resolve(__dirname, 'app/assets')
									]
								}
							}
						],
					}),
			},
			{
				test: /\.html$/, use: ['raw-loader']
			},
			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
				loader: 'url-loader',
				options: {
					limit: 10000
				}
			}
		],
	},
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000,
		ignored: /node_modules/
	},
	plugins: [
		new LiveReloadPlugin({}),
		extractCss,
		new HtmlWebpackPlugin({
			title:'Webpack AngularJs',
			filename: '../dist/index.html',
			template: './index.ejs',
			favicon: './favicon.ico'
		}),
		new webpack.DefinePlugin({
			ON_TEST: process.env.NODE_ENV === 'test'
		})
	]
};