import { combineReducers } from 'redux'
import { REQUEST_DATA,REQUEST_MOMENT } from './actions'

const initialState = {
	data:{
		moment:'',
		data: []
	}
};

function data(state = initialState.data, action) {
	switch (action.type) {
		case REQUEST_DATA:
			return Object.assign({}, state, {
				data: action.payload.data,
			});
		case REQUEST_MOMENT:
			return Object.assign({}, state, {
				moment: action.payload.moment,
			});
		default:
			return state
	}
}

const ossReducers = combineReducers({
	data
});

export default ossReducers