import React from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <div className="header">
      <div className="header__container">
        <Link to="/home" className="header__logo">
          Ангелина
        </Link>

        <nav className="header__nav">
          <Link
            to="/home"
            className={`header__nav-link ${
              location.pathname === "/home" ? "active" : ""
            }`}
          >
            Обо мне
          </Link>
          <Link
            to="/portfolio"
            className={`header__nav-link ${
              location.pathname === "/portfolio" ? "active" : ""
            }`}
          >
            Портфолио(комерческие проекты)
          </Link>
          <Link
            to="/shool"
            className={`header__nav-link ${
              location.pathname === "shool" ? "active" : ""
            }`}
          >
            Портфолио(учебные проекты)
          </Link>
        </nav>
        <button className="header__button">Связаться со мной</button>
      </div>
    </div>
  );
}
