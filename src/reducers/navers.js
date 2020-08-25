import immer from "immer";

import { types } from "../actions/navers";

const initialDraft = {
  current: {
    id: "",
    name: ""
  },
  navers: []
};

const naversReducer = immer((draft = initialDraft, action) => {
  const actions = {
    [types.LOAD]: payload => {
      draft.navers = payload;
    },

    [types.VIEW]: ({ id, name }) => {
      if (draft.current.id !== id) {
        draft.current.id = id;
        draft.current.name = name;
      }
    },

    [types.CLOSE]: () => {
      draft.current.id = "";
      draft.current.name = "";
    }
  };

  if (action.type in actions) {
    actions[action.type](action.payload);
  }

  return draft;
});

export default naversReducer;
