// import { translate } from './translations/translator';

const path = "/api/v1/";
const TOKEN_KEY = "tradeworks_user_token";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const URI = {
  // Join Us Form
  JOINUS: `${path}joinus`,
  LOGIN: `${path}login`,

  //Trades
  TRADES :  `${path}trade/all`,

  //Education
  INSTITUTIONS:  `${path}institution/all`
};

const DEBOUNCE_TIME = 700; //ms

export { URI, SERVER_URL, TOKEN_KEY, DEBOUNCE_TIME };
