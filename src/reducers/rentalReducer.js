import {
  SET_LOADING,
  GET_RENTALS,
  ADD_RENTAL,
  RENTALS_ERROR,
} from "../actions/types";

const initialState = {
  rentals: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_RENTALS:
      return {
        ...state,
        rentals: action.payload,
        loading: false,
      };
    case ADD_RENTAL:
      return {
        ...state,
        rentals: [...state.rentals, action.payload],
        loading: false,
      };
    case RENTALS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
