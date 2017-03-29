import { requestData } from '../redux/actions';

export const HomeComponent = {

	controller: class homeComponent{
		constructor($state,$ngRedux,$timeout){
			'ngInject';
			this._$state = $state;
			this._$ngRedux = $ngRedux;
			this._$timeout = $timeout;
			this.unsubscribe = $ngRedux.connect(this.mapStateToThis, requestData)(this);
		}

		$onInit(){
			let vm = this;
			vm.greetings = 'Home Module!';

			vm._$ngRedux.dispatch( requestData(new Date()) );

			setInterval(function(){
				vm._$ngRedux.dispatch( requestData(new Date()) );
			},1000);

			console.log(vm);
		}

		$onDestroy(){
			this.unsubscribe;
		}

		mapStateToThis(state) {
			return {
				message: state.data.message
			}
		}

	},
	controllerAs: 'vm',
	template: require('./home.html')
}