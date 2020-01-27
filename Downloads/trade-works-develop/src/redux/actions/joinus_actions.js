import { JoinusApi } from "../api";
import { JoinUsTypes } from "../actionTypes";
import { ApiActions } from ".";

export default {
  joinUs: postObj => {
    return async dispatch => {
      let res = null;
      try {
        res = await JoinusApi.joinUs(postObj);
        localStorage.setItem("user_data", res.data.data.user.firstName);
        //if (!res.data.error) {
        dispatch({
          type: JoinUsTypes.JOIN_US,
          data: res
        });
        // }
      } catch (err) {
        dispatch({
          type: JoinUsTypes.JOIN_US,
          data: err.response.data
        });
      }
    };
  },
  closeSuccessModal: () => {
    return {
      type: "CLOSE_MODAL"
    };
  },
  clearJoinUs: () => {
    return {
      type: "RESET_JOIN_US"
    };
  },
  setErrorMsg: err => ({ type: JoinUsTypes.RESET_ERR_MSG, err }),
  fetchAllInstitutes: obj => {
    return async dispatch => {
      ApiActions.request(dispatch);
      try {
        const res = await JoinusApi.fetchAllInstitutes(obj);
        const { data } = res;
        dispatch({
          type: JoinUsTypes.FETCHED_INSTITUTES,
          data
        });
        ApiActions.success(dispatch);
      } catch (err) {
        ApiActions.failure(dispatch, err);
      }
    };
  },
  fetchAllTrades: obj => {
    return async dispatch => {
      ApiActions.request(dispatch);
      try {
        const res = await JoinusApi.fetchAllTrades(obj);
        const { data } = res;
        dispatch({
          type: JoinUsTypes.FETCHED_TRADES,
          data
        });
        ApiActions.success(dispatch);
      } catch (err) {
        ApiActions.failure(dispatch, err);
      }
    };
  }
};
