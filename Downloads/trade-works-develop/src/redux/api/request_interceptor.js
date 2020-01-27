import { TOKEN_KEY } from "../../constants";

const RequestInterceptor = reqConfig => {
  try {
    let token = localStorage.getItem(TOKEN_KEY);
    reqConfig.headers = {
      ...reqConfig.headers,
      "x-auth-token": token
    };
    return reqConfig;
  } catch (error) {
    return Promise.reject(error);
  }
};

export { RequestInterceptor };
