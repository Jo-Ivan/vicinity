import { combineReducers } from "redux";
import rentalReducer from "./rentalReducer";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
  rental: rentalReducer,
  auth: authReducer,
  alert: alertReducer
});
