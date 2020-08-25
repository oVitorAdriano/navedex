import axios from "axios";

const api = axios.create({
  baseURL: "https://navedex-api.herokuapp.com/v1"
});

api.interceptors.request.use(value => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));

    if (!!token) {
      value.headers["Authorization"] = `Bearer ${token}`;
    }
  } catch (e) {}

  return value;
});

export default api;
