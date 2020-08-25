export const types = {
  LOAD: "@navers/LOAD",
  VIEW: "@navers/VIEW",
  CLOSE: "@navers/CLOSE"
};

export const loadNavers = data => ({
  type: types.LOAD,
  payload: data
});

export const openNaverView = ({ id, name }) => ({
  type: types.VIEW,
  payload: {
    id,
    name
  }
});

export const closeNaverView = () => ({
  type: types.CLOSE
});
