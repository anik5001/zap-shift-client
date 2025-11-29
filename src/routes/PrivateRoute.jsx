import React from "react";
import useAuth from "../Hooks/useAuth";
import { Link, Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
