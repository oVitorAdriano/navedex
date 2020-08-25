import { createStore, combineReducers } from "redux";

import session from "../reducers/session";

const reducers = combineReducers({
  session
});

const store = createStore(reducers);

export default store;
