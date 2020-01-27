import axios from "axios";
import { default as JoinusApi } from "./joinUs_api";
import { default as LoginApi } from "./login_api";
import { SERVER_URL } from "../../constants";
import { RequestInterceptor } from "./request_interceptor";
import { ResponseInterceptor } from "./response_interceptor";

const api = axios.create({
  baseURL: SERVER_URL
});

api.interceptors.request.use(RequestInterceptor);
api.interceptors.response.use(null, ResponseInterceptor);

export default api;
export { LoginApi, JoinusApi };
