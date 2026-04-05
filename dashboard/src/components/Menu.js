import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import {jwtDecode} from 'jwt-decode'
// import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";


const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [userName, setUserName] = useState("Guest");
  const [userEmail, setUserEmail] = useState("");
 

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };
  const menuClass = "menu";
  const activeMenuClass = "menu selected";

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
        setUserEmail(email);
      } catch (e) {
        console.error(e);
      }
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    const onDocumentClick = (e) => {
      if (!isProfileDropdownOpen) return;
      if (!e.target.closest("#profile-wrapper")) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", onDocumentClick);
    return () => document.removeEventListener("mousedown", onDocumentClick);
  }, [isProfileDropdownOpen]);

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

        <div className="profile-wrapper" id="profile-wrapper">
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">
              {userName[0].toUpperCase() +
                userName[userName.length - 1].toUpperCase()}
            </div>
            <p className="username">{userName}</p>
            <span className="profile-caret">
              {isProfileDropdownOpen ? (
                <KeyboardArrowUpIcon fontSize="small" />
              ) : (
                <KeyboardArrowDownIcon fontSize="small" />
              )}
            </span>
          </div>

          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <div className="profile-dropdown-header">
                <div className="profile-dropdown-name">{userName}</div>
                {userEmail ? (
                  <div className="profile-dropdown-email">{userEmail}</div>
                ) : null}
              </div>

              {/* <div className="profile-dropdown-divider" /> */}

              {/* <a
                className="profile-dropdown-item"
                href="http://localhost:3000/support"
              >
                <HelpOutlineIcon fontSize="small" />
                <span>Need help?</span>
              </a> */}

              <div className="profile-dropdown-divider" />

              <button
                type="button"
                className="profile-dropdown-item"
                onClick={logOut}
              >
                <LogoutIcon fontSize="small" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;