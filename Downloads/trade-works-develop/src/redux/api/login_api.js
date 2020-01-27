import api from ".";
import { URI } from "../../constants";

export default {
  login: data => {
    return api.post(URI.LOGIN, data);
  }
};
