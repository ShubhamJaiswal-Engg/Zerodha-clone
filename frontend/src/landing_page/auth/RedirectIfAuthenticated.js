import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStatus from "./useAuthStatus";

/**
 * Blocks access to auth pages (/login, /signup) when user is already logged in.
 * If a valid session exists, redirect to landing home (/) so browser Back works cleanly.
 */
const RedirectIfAuthenticated = ({ children }) => {
  const { isCheckingAuth, isAuthenticated } = useAuthStatus();

  if (isCheckingAuth) return null;
  if (isAuthenticated) return <Navigate to="/" replace />;

  return <>{children}</>;
};

export default RedirectIfAuthenticated;
