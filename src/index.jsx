import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import Application from "./application";
import store from "./application/store";
import GlobalStyle from "./assets/css/style";

render(
  <Provider store={store}>
    <GlobalStyle />

    <Application />
  </Provider>,
  document.getElementById("app")
);
