import angular from 'angular';
import uirouter from 'angular-ui-router';

import './home.less';

import { HomeComponent } from './home.component';

export const homeModule =
	angular.module('home',[ uirouter ])
		.component('home',HomeComponent)
		.config(($stateProvider) => {
			'ngInject';
			$stateProvider
				.state('home',{
					url:'/home',
					component:'home'
			})
		})
		.name;