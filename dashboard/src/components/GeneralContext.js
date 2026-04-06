import React, { useState, createContext, useEffect  } from "react";
import axios from 'axios'
import {jwtDecode} from 'jwt-decode'

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = createContext();

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [userName, setUserName] = useState(localStorage.getItem("username") || "Guest");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];
      if (!token) return;

      try {
        const decoded = jwtDecode(token);
        const { data } = await axios.get(
          `http://localhost:3002/api/user/${decoded.id}`
        );
        const username = data?.username || "";
        const email = data?.email || "";
        const displayName = username
          ? username.charAt(0).toUpperCase() + username.slice(1)
          : "Guest";
        setUserName(displayName);
        if(displayName !== "Guest"){
        localStorage.setItem("username", displayName);
        }
        setUserEmail(email);
      } catch (e) {
        console.error(e);
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
        userEmail
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;