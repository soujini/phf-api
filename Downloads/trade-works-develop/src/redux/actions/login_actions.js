import _ from "lodash";
import api, { LoginApi } from "../api";
import { URI } from "../../constants";
import { LoginTypes } from "../actionTypes";
import { ApiActions } from ".";

export default {
  loginUserSuccess: (dispatch, user) => {
    dispatch({
      type: LoginTypes.LOGIN_USER_SUCCESS,
      payload: user
    });
  },
  login: (body, cb) => {
    return async dispatch => {
      ApiActions.request(dispatch);
      let res = null;
      try {
        res = await LoginApi.login(body);
        if (!_.get(res, 'data.error.error')) {
          dispatch({
            type: LoginTypes.LOGIN_USER_SUCCESS,
            data: _.get(res, "data.data", null)
          });
          cb && cb();
        } else {
          dispatch({
            type: LoginTypes.LOGIN_USER_FAIL,
            payload: res.data
          });
        }
        ApiActions.success(dispatch);
      } catch (err) {
        ApiActions.failure(dispatch);
        dispatch({
          type: LoginTypes.LOGIN_USER_FAIL,
          payload: err.response.data
        });
      }
    };
  },
  logOut: () => {},
  clearLogInProps: () => {
    return {
      type: LoginTypes.CLEAR_LOGIN_PROPS
    };
  },
  toggleLoginModal: show => {
    return {
      type: LoginTypes.TOGGLE_LOGIN_MODAL,
      payload: show
    };
  }
};
