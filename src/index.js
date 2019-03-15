import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import "./styles.css";
import registerrServiceWorker from "./registerServiceWorker";
import App from "./App";
import counterReducer from "./Store/reducers/counter";
import resultReducer from "./Store/reducers/result";

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});
const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
