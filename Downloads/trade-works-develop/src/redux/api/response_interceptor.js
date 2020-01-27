import store from "../store";
import _ from "lodash";
import { LoginActions } from "../actions";

const ResponseInterceptor = error => {
  const status = _.get(error, "response.status");
  if (status === 401) {
    store.dispatch(LoginActions.logOut("Session Expired!"));
    return;
  }
};

export { ResponseInterceptor };
