export const types = {
  LOAD: "@navers/LOAD",
  CLEAR: "@navers/CLEAR",
  UPDATE: "@navers/UPDATE",
  DELETE: "@navers/DELETE"
};

export const loadNavers = data => ({
  type: types.LOAD,
  payload: data
});

export const clearNavers = () => ({
  type: types.CLEAR
});

export const updateNaver = data => ({
  type: types.UPDATE,
  payload: data
});

export const deleteNaver = ({ id }) => ({
  type: types.DELETE,
  payload: { id }
});
