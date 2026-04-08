import React, { useEffect, useState } from "react";
import axios from "axios";

/**
 * Blocks access to auth pages (/login, /signup) when user is already logged in.
 * If a valid session exists, redirects user to the dashboard app.
 */
const RedirectIfAuthenticated = ({ children }) => {
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const check = async () => {
      try {
        await axios.get("http://localhost:3002/me");
        if (!isMounted) return;
        setIsAuthenticated(true);
        setAuthChecked(true);
      } catch (e) {
        if (!isMounted) return;
        setIsAuthenticated(false);
        setAuthChecked(true);
      }
    };

    check();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!authChecked) return;
    if (isAuthenticated) {
      window.location.assign("http://localhost:3000");
    }
  }, [authChecked, isAuthenticated]);

  if (!authChecked) return null;
  if (isAuthenticated) return null;

  return <>{children}</>;
};

export default RedirectIfAuthenticated;
