import { GET_RENTALS, SET_LOADING } from "./types";
import rentalData from "../rentalData";

export const getRentals = () => async (dispatch) => {
  try {
    setLoading();

    const data = await rentalData;

    dispatch({
      type: GET_RENTALS,
      payload: data
    });
  } catch (err) {
    console.log(err);
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
