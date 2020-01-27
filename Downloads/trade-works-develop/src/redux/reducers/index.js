import { combineReducers } from "redux";
import ApiReducer from "./api.reducer";
import JoinUsReducer from "./join_us_reducer";
import LoginReducer from "./login_reducer";

export default combineReducers({
  Api: ApiReducer,
  Login: LoginReducer,
  JoinUs: JoinUsReducer
});
