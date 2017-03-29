import footer from './footer.html';
import './footer.less';

export const FooterComponent = {
	controller: class footerComponent{
		constructor($state){
			'ngInject';
			this._$state = $state;
		}

		$onInit(){

		}

		$onChanges(){

		}
	},
	controllerAs: 'vm',
	template: footer
}