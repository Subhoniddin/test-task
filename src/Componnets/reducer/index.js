import { combineReducers } from "redux";
import {legacy_createStore as createStore, applyMiddleware } from "redux";
import repotReduser from "./reposReduser";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReduser = combineReducers({
  repos: repotReduser,
});

export const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(thunk))
);
