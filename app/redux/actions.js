/**** action type ****/
export const REQUEST_DATA = 'REQUEST_DATA';

/**** action creators ****/
export function requestData(message) {
	return {
		type: REQUEST_DATA,
		payload: {message}
	}
}