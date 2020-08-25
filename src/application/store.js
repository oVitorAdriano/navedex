import { createStore, combineReducers } from "redux";

import session from "../reducers/session";
import navers from "../reducers/navers";

const reducers = combineReducers({
  session,
  navers
});

const store = createStore(reducers);

export default store;
