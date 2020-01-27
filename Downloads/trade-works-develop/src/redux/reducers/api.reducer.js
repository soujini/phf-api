import { ApiActionTypes } from "../actionTypes";

const initialState = {
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ApiActionTypes.REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case ApiActionTypes.SUCCESS:
    case ApiActionTypes.FAILURE: {
      return {
        ...state,
        loading: false
      };
    }
    default:
      return state;
  }
};
