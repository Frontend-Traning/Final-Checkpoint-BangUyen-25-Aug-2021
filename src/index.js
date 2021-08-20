import React, { Suspense } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import store from "./store";
import "./index.css";

ReactDOM.render(
  <Suspense>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById("root")
);
reportWebVitals();
