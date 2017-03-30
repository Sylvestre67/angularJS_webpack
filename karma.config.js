var path = require('path');
var webpackConfig = require('./webpack.config');
var entry = path.resolve(webpackConfig.context, webpackConfig.entry);

var preprocessors = {};
preprocessors[entry] = ['webpack'];

// Karma configuration
module.exports = function(config) {
	config.set({
		// ... normal karma configuration
		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],

		files: [
			entry,
			// all files ending in ".specs"
			{ pattern: 'app/*.specs.js', watched: true },
			{ pattern: 'app/**/*.specs.js', watched: true }
			// each file acts as entry point for the webpack configuration
		],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: preprocessors,

		ngHtml2JsPreprocessor: {
			// strip this from the file path
			stripPrefix: '/',
			stripSuffix: '.ext',
			// prepend this to the
			prependPrefix: '/',

			// or define a custom transform function
			// - cacheId returned is used to load template
			//   module(cacheId) will return template at filepath
			/*cacheIdFromPath: function(filepath) {
			 // example strips 'public/' from anywhere in the path
			 // module(app/templates/template.html) => app/public/templates/template.html
			 var cacheId = filepath.strip('public/', '');
			 return cacheId;
			 },*/

			// - setting this option will create only a single module that contains templates
			//   from all the files, so you can load them all with module('foo')
			// - you may provide a function(htmlPath, originalPath) instead of a string
			//   if you'd like to generate modules dynamically
			//   htmlPath is a originalPath stripped and/or prepended
			//   with all provided suffixes and prefixes
			moduleName: 'htmlModule'
		},

		webpack: webpackConfig,

		webpackMiddleware: {
			// webpack-dev-middleware configuration
			// i. e.
			stats: 'errors-only'
		},

		reporters: ['progress'],
		logLevel: config.LOG_INFO,

		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		//logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],
		//browsers: ['PhantomJS'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		plugins: [
			require('karma-webpack'),
			'karma-jasmine',
			'karma-chrome-launcher',
			'karma-ng-html2js-preprocessor',
			'karma-phantomjs-launcher'
		]

	});
};
