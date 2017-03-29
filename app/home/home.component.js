import { requestData } from '../redux/actions';

export const HomeComponent = {

	controller: class homeComponent{
		constructor($state,$ngRedux){
			'ngInject';
			this._$state = $state;
			this._$ngRedux = $ngRedux;
			this.unsubscribe = $ngRedux.connect(this.mapStateToThis, requestData)(this);
		}

		$onInit(){
			let vm = this;
			vm.greetings = 'Home Module!';

			vm._$ngRedux.dispatch(
				requestData('HeLoLoLdEs')
			);

			console.log(vm);
		}

		$onDestroy(){
			this.unsubscribe;
		}

		mapStateToThis(state) {
			return {
				message: state.data.message
			};
		}

	},
	controllerAs: 'vm',
	template: require('./home.html')
}