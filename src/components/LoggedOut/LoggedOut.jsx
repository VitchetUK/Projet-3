import React from "react";
import useAuth from "../../auth/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const LoggedOut = () => {
  const { isLoggedIn, isLoading } = useAuth();
  if (isLoading)
    return (
      <div className="spinnerDiv">
        <div className="spinner"></div>
      </div>
    );
  if (isLoggedIn) return <Navigate to="/" />;
  else return <Outlet />;
};

export default LoggedOut;
