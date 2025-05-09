import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";

const Header = () => {
  return (
    <header className="main-header">
      <Logo className="logo-header" />
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apropos"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
