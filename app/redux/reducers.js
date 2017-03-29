import { combineReducers } from 'redux'
import { REQUEST_DATA } from './actions'

const initialState = {
	data:{
		message:''
	}
};

function data(state = initialState.data, action) {
	switch (action.type) {
		case REQUEST_DATA:
			return Object.assign({}, state, {
				message: action.payload.message,
			});
		default:
			return state
	}
}

const ossReducers = combineReducers({
	data
});

export default ossReducers