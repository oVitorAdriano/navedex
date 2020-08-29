import immer from "immer";

import { types } from "../actions/navers";

const initialDraft = {
  navers: []
};

const naversReducer = immer((draft = initialDraft, action) => {
  const actions = {
    [types.LOAD]: payload => {
      draft.navers = payload;
    },

    [types.UPDATE]: payload => {
      const i = draft.navers.findIndex(naver => naver.id === payload.id);

      if (i >= 0) {
        draft.navers[i] = payload;
      }
    }
  };

  if (action.type in actions) {
    actions[action.type](action.payload);
  }

  return draft;
});

export default naversReducer;
