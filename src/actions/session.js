export const types = {
  AUTHENTICATE: "@session/AUTHENTICATE",
  DISCONNECT: "@session/DISCONNECT"
};

export const authenticate = ({ token, user }) => {
  localStorage.setItem("token", JSON.stringify(token));
  localStorage.setItem("user", JSON.stringify(user));

  return {
    type: types.AUTHENTICATE,
    payload: {
      token,
      user
    }
  };
};

export const disconnect = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  return {
    type: types.DISCONNECT
  };
};
