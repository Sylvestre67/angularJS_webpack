import angular from 'angular';

import { header } from './header/header.module';
import { footer } from './footer/footer.module';

export const layoutModule =
	angular
		.module('layout',[
			'header',
			'footer'
		])
		.name;