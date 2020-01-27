import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { ThemeProvider } from "@material-ui/core/styles";

import Router from "./routes/router";
import store from "./redux/store";

import "./index.css";

import TradeWork_ThemeBuilder from "./utilities/create_theme";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={TradeWork_ThemeBuilder}>
      <Router />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
