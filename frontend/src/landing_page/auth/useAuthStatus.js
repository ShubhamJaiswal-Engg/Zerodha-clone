import { useEffect, useState } from "react";
import axios from "axios";

const AUTH_STATUS_KEY = "authStatus";

/**
 * Lightweight auth status hook.
 *
 * - Uses sessionStorage as an instant UI hint to prevent flicker.
 * - Always verifies via GET http://localhost:3002/me after mount.
 */
export default function useAuthStatus() {
  const [authStatus, setAuthStatus] = useState(() => {
    return sessionStorage.getItem(AUTH_STATUS_KEY) || "checking";
  });

  useEffect(() => {
    let isMounted = true;

    const check = async () => {
      try {
        await axios.get("http://localhost:3002/me");
        if (!isMounted) return;
        setAuthStatus("authed");
        sessionStorage.setItem(AUTH_STATUS_KEY, "authed");
      } catch (e) {
        if (!isMounted) return;
        setAuthStatus("guest");
        sessionStorage.setItem(AUTH_STATUS_KEY, "guest");
      }
    };

    check();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    authStatus,
    isCheckingAuth: authStatus === "checking",
    isAuthenticated: authStatus === "authed",
  };
}
