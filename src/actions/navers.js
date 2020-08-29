export const types = {
  LOAD: "@navers/LOAD"
};

export const loadNavers = data => ({
  type: types.LOAD,
  payload: data
});
