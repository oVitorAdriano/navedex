import immer from "immer";
import { types } from "../actions/session";

const initialDraft = {
  isAuthenticated: false,
  token: "",
  user: {}
};

const sessionReducer = immer((draft = initialDraft, action) => {
  const actions = {
    [types.AUTHENTICATE]: ({ user, token }) => {
      draft.isAuthenticated = true;
      draft.token = token;
      draft.user = user;
    },

    [types.DISCONNECT]: () => {
      draft.isAuthenticated = false;
      draft.token = "";
      draft.user = {};
    }
  };

  if (action.type in actions) {
    actions[action.type](action.payload);
  }

  return draft;
});

export default sessionReducer;
