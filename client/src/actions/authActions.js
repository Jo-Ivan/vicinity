import axios from "axios";
import { setAlert } from "./alertActions";
import { LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_SUCCESS, SIGNUP_FAILURE, USER_LOADED, AUTH_ERROR, LOGOUT_USER } from "./types";

export const loadUser = () => async (dispatch) => {
  try {
    const res = await axios.get("/users/success");

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

export const signup = (username, email, password, passwordConfirmation) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ username, email, password, passwordConfirmation });

  try {
    const res = await axios.post("/users/signup", body, config);

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
    dispatch(setAlert("You have successfully signed up!", "success", 5000));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: SIGNUP_FAILURE
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/users/login", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
    dispatch(setAlert("You have successfully logged in!", "success", 2000));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAILURE
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER
  });
};
