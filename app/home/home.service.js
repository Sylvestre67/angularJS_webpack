import actions from 'redux/actions';

export const ossHomeService = ($resource,$ngRedux) => {
	'ngInject'
	return $resource('/mocks/api/channel/video_length/:id.json',{},
		{
			get:{
				isArray:true,
				transformResponse:(response)=>{
					let data;

					data = angular.fromJson(response);
					// Randomize for the beauty of the chart transition.
					for (let stats of data) {
						stats.value += Math.floor(Math.random() * (100 - -100)) + -100;
					}

					$ngRedux.dispatch(actions.requestData(data));

					return data
				}
			}
		})
};