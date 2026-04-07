import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = createContext();

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [userName, setUserName] = useState(localStorage.getItem("username") || "Guest");
  const [userEmail, setUserEmail] = useState("");
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const { data } = await axios.get("http://localhost:3002/me");

        const username = data?.user?.username || "";
        const email = data?.user?.email || "";
        const displayName = username
          ? username.charAt(0).toUpperCase() + username.slice(1)
          : "Guest";

        setUserName(displayName);
        setUserEmail(email);
        setIsAuthenticated(true);
        setAuthChecked(true);

        if (displayName !== "Guest") {
          localStorage.setItem("username", displayName);
        }
      } catch (e) {
        setIsAuthenticated(false);
        setAuthChecked(true);
        setUserName("Guest");
        setUserEmail("");
        localStorage.removeItem("username");
      }
    };

    fetchUserInfo();

    const onKeyDown = (e) => {
      if (e.key === "Escape") handleCloseBuyWindow();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);


  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };
  const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeBuyWindow: handleCloseBuyWindow,
        closeSellWindow: handleCloseBuyWindow,
        userName,
        userEmail,
        authChecked,
        isAuthenticated,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;