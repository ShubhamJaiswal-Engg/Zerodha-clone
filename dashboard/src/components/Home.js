import React, { useEffect, useContext } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { ToastContainer, toast } from "react-toastify";
import GeneralContext from "./GeneralContext";

const Home = () => {
  const context = useContext(GeneralContext);

  useEffect(() => {
    if (!context.authChecked) return;
    if (!context.isAuthenticated) {
      window.location.assign("http://localhost:3000/login");
    }
  }, [context.authChecked, context.isAuthenticated]);

  useEffect(() => {
    if (context.userName !== "Guest") {
       const urlParams = new URLSearchParams(window.location.search);
      const isSignup = urlParams.get("signup") === "true";
      const message = isSignup ? `Welcome ${context.userName}` : `Welcome back ${context.userName}`;

      if (isSignup) {
        urlParams.delete("signup");
        //Leaving for UI=UserId { + (urlParams.toString() ? '?' + urlParams.toString() : '') }
        // const newUrl =;
        window.history.replaceState(null, '',  window.location.pathname);
      }
      console.log(context.userName);
      toast(message, {
        className: "custom-toast",
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        toastId: "welcome-toast",
        style: { "--toastify-color-progress-light": "#27ae60" },
      });
    }
  }, [context.userName]);

  if (!context.authChecked) return null;
  if (!context.isAuthenticated) return null;
  
  return (
    <>
      <TopBar />
      <Dashboard />
      <ToastContainer />
    </>
  );
};

export default Home;


// i want to set a mechanism in which user only access dashboard only iff user is valid or authorised user show me changes to update in existing user