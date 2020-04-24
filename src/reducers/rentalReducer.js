import { GET_RENTALS, SET_LOADING } from "../actions/types";

const initialState = {
  rentals: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_RENTALS:
      return {
        ...state,
        rentals: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
