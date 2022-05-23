import { Link } from "react-router-dom";
import React from "react";
import "./navBar.css"

function NavBar() {
    return (
        <header>
<nav className="nav-bar">
  <ul className="nav-list">
    <li className = "nav-item">
    <Link  to={'/'}>
    <div id="cardekho">
    Xtremecars
    </div>
     </Link>
    {/* <a href={"/"}></a><div id="cardekho">
    Xtremecars</div> */}
    </li>
    <li  className = "nav-item">
    <a  id="newCar" >NewCar</a>
    </li>
    <li  className = "nav-item">
    <a  id="usedCar">Used Car</a>
    </li>
    <li  className = "nav-item">
    <a  id="profile">My Profile</a>
    </li>
  </ul>
</nav >
        </header>
    );
}

export default NavBar;