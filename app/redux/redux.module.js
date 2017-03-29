import angular from 'angular';
import ngRedux from 'ng-redux';

import { applyMiddleware, createStore } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
//import { logger } from 'redux-logger'

const logger = createLogger({
	level: 'info',
	collapsed: true
});
import ossReducers from './reducers';

export const ossRedux = angular.module('ossRedux',[ngRedux])
	.config(($ngReduxProvider) => {
		'ngInject';
		console.log('---> Redux Store');
		$ngReduxProvider.createStoreWith(ossReducers, [logger]);
	})
	.name;