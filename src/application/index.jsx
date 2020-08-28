import React from "react";
import { useDispatch } from "react-redux";

import Routes from "./routes";
import { authenticate, disconnect } from "../actions/session";

const Application = () => {
  const dispatch = useDispatch();

  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const user = JSON.parse(localStorage.getItem("user"));

      if (!!token && "id" in user && "email" in user) {
        dispatch(authenticate({ token, user }));
      } else {
        throw new Error();
      }
    } catch (e) {
      dispatch(disconnect());
    } finally {
      setReady(true);
    }
  }, [dispatch]);

  return ready ? <Routes /> : <span>Carregando...</span>;
};

export default Application;
