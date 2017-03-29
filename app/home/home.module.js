import angular from 'angular';
import uirouter from 'angular-ui-router';

import './home.less';

import { HomeComponent } from './home.component';
import { ossHomeService } from './home.service';

export const homeModule = angular.module('home',[ uirouter ])
		.component('ossHome', HomeComponent)
		.service('ossHomeService', ossHomeService)
		.config(($stateProvider) => {
			'ngInject';
			$stateProvider
				.state('home',{
					url:'/',
					component:'ossHome'
			})
		})
		.name;