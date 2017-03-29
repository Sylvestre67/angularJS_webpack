import ossHomeService from 'home/home.service';

/**** action type ****/
export const REQUEST_MOMENT = 'REQUEST_MOMENT';
export const REQUEST_DATA = 'REQUEST_DATA';

/**** action creators ****/
export function requestMoment( moment ) {
	return {
		type: REQUEST_MOMENT,
		payload: { moment }
	}
}

export function requestData(data) {
	return {
		type: REQUEST_DATA,
		payload: { data }
	}
}

export default { requestData, requestMoment };