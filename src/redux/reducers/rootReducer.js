///combines all application reducers
import { combineReducers } from "redux";
import template from "./templateReducer";

export default combineReducers({
  template: template,
});
