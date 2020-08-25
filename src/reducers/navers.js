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
      draft.current.id = id;
      draft.current.name = name;
    },

    [types.CLOSE]: () => {
      draft.current = initialDraft.current;
    }
  };

  if (action.type in actions) {
    actions[action.type](action.payload);
  }

  return draft;
});

export default naversReducer;
