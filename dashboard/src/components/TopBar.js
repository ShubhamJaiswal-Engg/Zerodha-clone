import React from "react";
import { useLocation } from "react-router-dom";

import Menu from "./Menu";

const getPageTitle = (pathname) => {
  switch (pathname) {
    case "/":
      return "Dashboard";
    case "/orders":
      return "Orders";
    case "/holdings":
      return "Holdings";
    case "/positions":
      return "Positions";
    case "/funds":
      return "Funds";
    case "/apps":
      return "Apps";
    case "/marketwatch":
      return "Marketwatch";
    default:
      return "Dashboard";
  }
};

const TopBar = () => {
  const { pathname } = useLocation();
  const pageTitle = getPageTitle(pathname);

  return (
    <div className="topbar-container">
      <div className="indices-container" aria-hidden="true">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      <Menu pageTitle={pageTitle} />
    </div>
  );
};

export default TopBar;
