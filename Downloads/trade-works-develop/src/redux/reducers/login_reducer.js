import { TOKEN_KEY } from "../../constants";

const initialState = {
  loggingIn: false,
  loginError: null,
  user: null,
  openLoginModal: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_LOGIN_PROPS": {
      return {
        ...state,
        loggingIn: false,
        loginError: null
      };
    }
    case "LOGIN_USER": {
      return {
        ...state,
        loggingIn: true
      };
    }
    case "LOGIN_USER_SUCCESS": {
      const data = action.data;
      localStorage.setItem("profile", JSON.stringify(data));
      localStorage.setItem(TOKEN_KEY, data.token);
      return {
        ...state,
        loggingIn: false,
        loginError: null,
        user: data
      };
    }
    case "LOGIN_USER_FAIL": {
      const error = action.payload;
      return {
        ...state,
        loggingIn: false,
        loginError: error
      };
    }
    case "CLOSE_MODAL": {
      return {
        ...state,
        openLoginModal: false
      };
    }
    default:
      return state;
  }
};
