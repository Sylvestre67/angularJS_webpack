import angular from 'angular';
import ngRedux from 'ng-redux';

import { applyMiddleware, createStore } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger({
	level: 'info',
	collapsed: false
});
import ossReducers from './reducers';

export const ossRedux = angular.module('ossRedux',[ ngRedux ])
	.config(($ngReduxProvider) => {
		'ngInject';
		$ngReduxProvider.createStoreWith(ossReducers, [
			logger,
			thunkMiddleware // lets us dispatch() functions
		]);
	})
	.name;