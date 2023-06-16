import React from "react";
import { Link } from "react-router-dom";
import ThemeToggler from "./ThemeToggler";

function Header() {
  return (
    <header>
      <h1>
        <Link to="/">Aplikasi Catatan</Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/archives">Arsip</Link>
          </li>
        </ul>
      </nav>
      {/* <ThemeToggler /> */}
    </header>
  );
}

export default Header;
