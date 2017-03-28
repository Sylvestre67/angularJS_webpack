export const ossComponent = {
	controller: class ossComponent{
		constructor($state){
			'ngInject';
			this._$state = $state;
		}

		$onInit(){
			let vm = this;
			vm.greetings = 'Hello Root !';
		}

		$onChanges(){

		}
	},
	controllerAs: 'vm',
	template: require('./oss.html')
};