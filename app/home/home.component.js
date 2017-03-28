export const HomeComponent = {

	controller: class homeComponent{
		constructor($state){
			'ngInject';
			this._$state = $state;
		}

		$onInit(){
			let vm = this;
			vm.greetings = 'Home Module!';
		}

		$onChanges(){

		}
	},
	controllerAs: 'vm',
	template: require('./home.html')
}