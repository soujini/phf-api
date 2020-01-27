import api from ".";
import { URI } from "../../constants";

export default {
  joinUs: data => {
    return api.post(URI.JOINUS, data);
  },
  fetchAllInstitutes: data => api.post(URI.INSTITUTIONS, data),
  fetchAllTrades: () => api.get(URI.TRADES)
};
