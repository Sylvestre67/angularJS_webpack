const LiveReloadPlugin = require('webpack-livereload-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: __dirname + '/app',
	entry: './oss.module.js',
	output:{
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module:{
		loaders: [
			{test: /\.js$/, loader: 'ng-annotate-loader!babel-loader', exclude: /node_modules/},
			{test: /\.css$/, loaders:'style-loader!css-loader'},
			{test: /\.less$/, loaders:'style-loader!css-loader!less-loader'},
			{test: /\.scss$/, loaders:'style-loader!css-loader!sass-loader'},
			{test: /\.html$/, loader: 'raw-loader'}
		]
	},
	plugins: [
		new LiveReloadPlugin({}),
		new HtmlWebpackPlugin({
			title:'Webpack AngularJs',
			filename: '../dist/index.html',
			template: './index.ejs',
			favicon: './favicon.ico'
		})
	]
};