import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import "./assets/styles/universal.scss";
import Router from "./routes/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router />
  </Provider>
);
