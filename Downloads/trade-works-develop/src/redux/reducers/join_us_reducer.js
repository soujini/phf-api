import { JoinUsTypes } from "../actionTypes";

const initialState = {
  joinUsFormData: {},
  openSuccessModal: false,
  clearForm: false,
  institutions: [],
  trades: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case JoinUsTypes.JOIN_US: {
      const success = action.data.data.errorCode == 200;
      return {
        ...state,
        joinUsFormData: action.data,
        openSucessModal: success,
        clearForm: success
      };
    }
    case "CLOSE_MODAL": {
      return {
        ...state,
        openSucessModal: false,
        clearForm: false
      };
    }
    case "RESET_JOIN_US": {
      return {
        ...state,
        clearForm: false
      };
    }
    case JoinUsTypes.RESET_ERR_MSG: {
      return {
        ...state,
        joinUsFormData: {
          ...state.joinUsFormData,
          error: {
            ...state.joinUsFormData.error,
            message: action.err
          }
        }
      };
    }
    case JoinUsTypes.FETCHED_INSTITUTES: {
      return {
        ...state,
        institutions: action.data.data
      };
    }
    case JoinUsTypes.FETCHED_TRADES: {
      return {
        ...state,
        trades : action.data.data
      };
    }
    default:
      return state;
  }
};
