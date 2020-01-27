import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers";

let store = null;
if (process.env.NODE_ENV === "development") {
  store = createStore(rootReducer, applyMiddleware(thunk, logger));
} else {
  store = createStore(rootReducer, applyMiddleware(thunk));
}

export default store;
