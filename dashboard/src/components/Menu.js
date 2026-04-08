import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useContext } from "react";
import GeneralContext from "./GeneralContext";
import axios from "axios";


const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
 
  const context = useContext(GeneralContext);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };
  const menuClass = "menu";
  const activeMenuClass = "menu selected";
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

  const logOut = async () => {
    try {
      // Token cookie is httpOnly, so it must be cleared by the server.
      await axios.post(
        "http://localhost:3002/logout",
        {},
        {
          withCredentials: true,
        }
      );
    } catch (e) {
      // Even if the request fails, still clear local state and redirect.
      console.error(e);
    } finally {
      localStorage.removeItem("username");
      window.location.replace("http://localhost:3000");
    }
  };
  return (
    <div className="menu-container">
      <img src="logo.png" alt="Zerodha" style={{ width: "50px" }} />
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
              {context.userName[0].toUpperCase() +
                context.userName[context.userName.length - 1].toUpperCase()}
            </div>
            <p className="username">{context.userName}</p>
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
                <div className="profile-dropdown-name">{context.userName}</div>
                {context.userEmail ? (
                  <div className="profile-dropdown-email">{context.userEmail}</div>
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