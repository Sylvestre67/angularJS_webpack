import header from './header.html';
import './header.less';

export const HeaderComponent = {
	controllerAs:'vm',
	controller: class headerComponent{
		constructor(){
			'ngInject';
		}
		$onInit(){

		}
	},
	template: header
};