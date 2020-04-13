import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

import templateReducer from "./reducers/templateReducer";
// import testReducer from "./reducers/testReducer";

const initialState = {};

const middleware = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const reducer = combineReducers({
  data: templateReducer,
  //test: testReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(...middleware))
);

export default store;
