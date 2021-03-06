import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./src/store";

import AppComponent from "./src/app";

import "./sass/style.scss";

render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById("react-typescript-example")
);
