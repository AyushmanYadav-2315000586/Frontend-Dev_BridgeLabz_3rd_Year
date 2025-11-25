import React from "react";
import "./Header.css";
import logo from "../logo.svg";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header>
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/profile">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
