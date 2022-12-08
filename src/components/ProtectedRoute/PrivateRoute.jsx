import React from "react";
import useAuth from "../../auth/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import Spinner from "../Spinner";

const PrivateRoute = () => {
  const { isLoggedIn, isLoading } = useAuth();
  if (isLoading) return <Spinner />;
  if (!isLoggedIn) return <Navigate to="/signin" />;
  else return <Outlet />;
};

export default PrivateRoute;
