import { SET_LOADING, GET_RENTALS, ADD_RENTAL, RENTALS_ERROR } from "./types";

export const getRentals = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/rentals");
    const data = await res.json();

    dispatch({
      type: GET_RENTALS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: RENTALS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const addRental = (rental) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/rentals", {
      method: "POST",
      body: JSON.stringify(rental),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    dispatch({
      type: ADD_RENTAL,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: RENTALS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
