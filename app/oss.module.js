import angular    from 'angular';
import ngMaterial from 'angular-material';
import ngAnimate  from 'angular-animate';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

import uirouter from 'angular-ui-router';

import  'bootstrap/scss/bootstrap-grid.scss';
import  'angular-material/angular-material.css';

import { ossComponent } from './oss.component.js';

import { ossRedux } from './redux/redux.module';

import { layoutModule } from './layout/layout.module';
import { chartsModule } from './charts/charts.module'
import { homeModule } from './home/home.module';


export const oss = angular.module('oss',[
	ngMaterial,
	ngAnimate,
	ngResource,
	ngSanitize,

	/* 3rd-party modules */
	uirouter,

	/* Redux */
	ossRedux,

	/* oss modules */
	layoutModule,
	//'chart',
	chartsModule,
	homeModule
])
	.component('oss', ossComponent)
	.config(($urlRouterProvider)=> {
		'ngInject';
		$urlRouterProvider.otherwise('/');
	})
	.name;