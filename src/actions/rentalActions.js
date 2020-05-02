import { SET_LOADING, GET_RENTALS, GET_RENTAL, CREATE_RENTAL, RENTALS_ERROR } from './types';

export const getRentals = () => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch('/rentals');
		const data = await res.json();

		dispatch({
			type: GET_RENTALS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: RENTALS_ERROR,
			payload: err.response.statusText
		});
	}
};

export const getRental = (id) => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch(`/rentals/${id}`);
		const data = await res.json();

		dispatch({
			type: GET_RENTAL,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: RENTALS_ERROR,
			payload: err.response.statusText
		});
	}
};

export const createRental = (rental) => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch('/rentals', {
			method: 'POST',
			body: JSON.stringify(rental),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const data = await res.json();

		dispatch({
			type: CREATE_RENTAL,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: RENTALS_ERROR,
			payload: err.response.statusText
		});
	}
};

export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};
