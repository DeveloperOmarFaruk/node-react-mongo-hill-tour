import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/MultiComponents/Loading";
import useFirebase from "../Hooks/useFirebase";

const PrivateRoute = ({ children }) => {
  const { userInfo, loading } = useFirebase();
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (userInfo.email) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login" />;
  }
};

export default PrivateRoute;
