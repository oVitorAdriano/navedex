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

    [types.CLEAR]: () => {
      draft.navers = [];
    },

    [types.UPDATE]: payload => {
      const i = draft.navers.findIndex(naver => naver.id === payload.id);

      if (i >= 0) {
        draft.navers[i] = payload;
      }
    },

    [types.DELETE]: payload => {
      const i = draft.navers.findIndex(naver => naver.id === payload.id);

      console.log(draft.navers[i]);

      if (i >= 0) {
        draft.navers.splice(i, 1);
      }
    }
  };

  if (action.type in actions) {
    actions[action.type](action.payload);
  }

  return draft;
});

export default naversReducer;
