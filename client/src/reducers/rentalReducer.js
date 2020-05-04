import { GET_RENTALS, GET_RENTAL, CREATE_RENTAL, RENTALS_ERROR, RESET_RENTAL, SET_LOADING } from "../actions/types";

const initialState = {
  rental: {},
  rentals: [],
  loading: false,
  error: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_RENTALS:
      return {
        ...state,
        rentals: payload,
        loading: false
      };
    case GET_RENTAL:
      return {
        ...state,
        rental: payload,
        loading: false
      };
    case RESET_RENTAL:
      return {
        ...state,
        rental: {},
        loading: false
      };
    case CREATE_RENTAL:
      return {
        ...state,
        rentals: [...state.rentals, payload],
        loading: false
      };
    case RENTALS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
};
