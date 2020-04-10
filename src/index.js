import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import redux
import { createStore } from "redux";
import { Provider } from "react-redux";
//import router
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BaseLayout from "./components/layout/BaseLayout";
import Container from "./components/Container";
import rootReducer from "./reducers/rootReducer";

let saveToLocalStorage = (state) => {
  try {
    const serializeState = JSON.stringify(state);
    localStorage.setItem("state", serializeState);
    // localStorage["state"] = serializeState [[[also works]]]
  } catch (e) {
    console.log(e);
  }
};

let loadFromLocalStorage = (params) => {
  try {
    const serializeState = localStorage.getItem("state");
    if (serializeState === null) {
      return undefined;
    } else {
      return JSON.parse(serializeState);
    }
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const persistedState = loadFromLocalStorage();

let store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/container" component={Container} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
