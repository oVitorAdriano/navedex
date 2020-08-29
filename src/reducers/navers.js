import immer from "immer";

import { types } from "../actions/navers";

const initialDraft = {
  navers: []
};

const naversReducer = immer((draft = initialDraft, action) => {
  const actions = {
    [types.LOAD]: payload => {
      draft.navers = payload;
    }
  };

  if (action.type in actions) {
    actions[action.type](action.payload);
  }

  return draft;
});

export default naversReducer;
