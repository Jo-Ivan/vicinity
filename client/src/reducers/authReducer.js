import { LOGIN_SUCCESS, LOGIN_FAILURE, USER_LOADED, AUTH_ERROR, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGOUT_USER } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: ""
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    case AUTH_ERROR:
    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
    case LOGOUT_USER:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: ""
      };
    default:
      return state;
  }
}
