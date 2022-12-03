import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthWrapper = () => {
  const authState = useSelector((state) => state.auth);
  const isLoggedIn = authState.currentWallet === null ? false : true;
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default AuthWrapper;
