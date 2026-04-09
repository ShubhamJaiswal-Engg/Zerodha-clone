import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useAuthStatus from "./auth/useAuthStatus";

function NavBar() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const { isCheckingAuth, isAuthenticated } = useAuthStatus();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  const menuClass = "menu";
  const activeMenuClass = "menu selected";

    return ( 
<nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom" >
  <div className="container p-2">
    <Link className="navbar-brand" to={"/"} ><img src='media/images/logo.svg'  alt="logo" style={{width:"23%"}}/></Link>
    <button className="navbar-toggler" style={{color: "red"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-lg-0">
        <li className="nav-item">
          {isCheckingAuth ? null : isAuthenticated ? (
            <a
              className="nav-link active"
              aria-current="page"
              href="http://localhost:3001"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </a>
          ) : (
            <Link
              className="nav-link active"
              aria-current="page"
              to={"/signup"}
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>SignUp</p>
            </Link>
          )}
          
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/about"} onClick={() => handleMenuClick(1)} ><p className={selectedMenu === 1 ? activeMenuClass : menuClass}>About</p></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/product"} onClick={() => handleMenuClick(2)} ><p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Products</p></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/pricing"} onClick={() => handleMenuClick(4)} ><p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Pricing</p></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/support"} onClick={() => handleMenuClick(5)} ><p className={selectedMenu === 5 ? activeMenuClass : menuClass}>support</p></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
     );
}

export default NavBar;