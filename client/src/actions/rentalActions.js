import axios from "axios";
import { GET_RENTALS, GET_RENTAL, CREATE_RENTAL, RENTALS_ERROR, RESET_RENTAL, SET_LOADING } from "./types";

export const getRentals = () => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADING
    });

    const res = await axios.get("/rentals");

    dispatch({
      type: GET_RENTALS,
      payload: res.data
    });
    dispatch({
      type: RESET_RENTAL
    });
  } catch (err) {
    dispatch({
      type: RENTALS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const getRentalById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADING
    });

    const res = await axios.get(`/rentals/${id}`);

    dispatch({
      type: GET_RENTAL,
      payload: res.data
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
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.post("/rentals", rental, config);

    dispatch({
      type: CREATE_RENTAL,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: RENTALS_ERROR,
      payload: err.response.statusText
    });
  }
};
