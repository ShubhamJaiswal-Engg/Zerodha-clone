import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";



const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [userName, setUserName] = useState("Guest");
 

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };
  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const userId = queryParams.get("UI");
    setUserName(userId || "Guest");
  // console.log(userName);
  
  }, []);

  const deleteCookie = (name) => {
    const expires = "Thu, 01 Jan 1970 00:00:00 GMT";
    const encodedName = encodeURIComponent(name);
    const base = `${encodedName}=; expires=${expires}; Max-Age=0; path=/; SameSite=Lax`;

    // If the cookie was set without `domain`, this clears it.
    document.cookie = base;

    // Your backend sets `domain=localhost`, so clear that variant too.
    document.cookie = `${base}; domain=localhost`;
  };

  const logOut = () => {
    deleteCookie("token");

    // Redirect is the reliable logout UX in browsers.
    window.location.replace("http://localhost:3000");
  };
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => {handleMenuClick(1);
              }}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{userName[0].toUpperCase() + userName[userName.length - 1].toUpperCase()}</div>
          <p className="username">{userName}</p>
          </div>
          <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(7)}>
                </Link>
          <p className={selectedMenu === 7 ? activeMenuClass : menuClass} style={{marginLeft:"25px",cursor:"pointer",fontSize:"18px"}} onClick={logOut}>Log Out</p>
      </div>
    </div>
  );
};

export default Menu;