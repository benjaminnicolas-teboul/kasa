import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo.jsx";

const Header = () => {
  return (
    <header className="main-header">
      <Link to="/">
        <Logo className="logo-header" />
      </Link>
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
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
