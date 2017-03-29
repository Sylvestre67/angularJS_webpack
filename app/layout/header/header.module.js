import angular from 'angular';
import { HeaderComponent } from './header.component';

export const HeaderModule =
	angular
		.module('header',[])
		.component('ossHeader', HeaderComponent);