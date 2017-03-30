import angular from 'angular';
import ngMaterial from 'angular-material';

export const IconModule = angular.module('ossIcons',[ ngMaterial ])
	.config(function($mdIconProvider) {
		'ngInject'

		// Register icon IDs with sources. Future $mdIcon( <id> ) lookups
		// will load by url and retrieve the data via the $templateRequest
		// see https://material.angularjs.org/latest/demo/icon
		$mdIconProvider
			.icon('oss:money_ball', 'icons/money_ball.svg', 24);

	})
	.run(function($templateRequest){
		'ngInject'

		// Registering icons
		let urls = [
			'icons/money_ball.svg',
		];

		// Loading Icons to the template cache.
		urls.forEach( function(url) { $templateRequest(url); });
	})
	.name;