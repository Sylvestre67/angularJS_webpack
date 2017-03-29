import actions from '../redux/actions';

export const HomeComponent = {

	controller: class homeComponent{
		constructor($state,$ngRedux,$timeout,ossHomeService){
			'ngInject';
			this._$state = $state;
			this._$ngRedux = $ngRedux;
			this._$timeout = $timeout;

			this.unsubscribe = $ngRedux.connect(this.mapStateToThis, actions)(this);
			this._ossHomeService = ossHomeService;
		}

		$onInit(){
			let vm = this;
			vm.greetings = 'Home Module!';

			vm._$ngRedux.dispatch( actions.requestMoment(new Date()) );

			this._ossHomeService.get({id:1});

			setInterval(function(){
				vm._$ngRedux.dispatch( actions.requestMoment(new Date()) );
			},1000);

			setInterval(function(){
				vm._ossHomeService.get({id:1});
			},3000);

			console.log(vm);
		}

		$onDestroy(){
			this.unsubscribe();
		}

		mapStateToThis(state) {
			return {
				moment: state.data.moment,
				video_length: state.data.data
			}
		}
	},
	controllerAs: 'vm',
	template: require('./home.html')
}