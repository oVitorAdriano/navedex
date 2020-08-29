export const types = {
  LOAD: "@navers/LOAD",
  UPDATE: "@navers/UPDATE"
};

export const loadNavers = data => ({
  type: types.LOAD,
  payload: data
});

export const updateNaver = data => ({
  type: types.UPDATE,
  payload: data
});
