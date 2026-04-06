import React,{useEffect, useContext} from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { ToastContainer, toast } from "react-toastify";
import GeneralContext from "./GeneralContext";

const Home = () => {
  const context = useContext(GeneralContext);

  useEffect(() => {
    if (context.userName !== "Guest") {
       const urlParams = new URLSearchParams(window.location.search);
      const isSignup = urlParams.get("signup") === "true";
      const message = isSignup ? `Welcome ${context.userName}` : `Welcome back ${context.userName}`;

      if (isSignup) {
        urlParams.delete("signup");
        const newUrl = window.location.pathname + (urlParams.toString() ? '?' + urlParams.toString() : '');
        window.history.replaceState(null, '', newUrl);
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
  
  return (
    <>
      <TopBar />
      <Dashboard />
      <ToastContainer />
    </>
  );
};

export default Home;
