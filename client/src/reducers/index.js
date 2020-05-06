import { combineReducers } from "redux";
import rentalReducer from "./rentalReducer";
import authReducer from "./authReducer";

export default combineReducers({
  rental: rentalReducer,
  auth: authReducer
});
