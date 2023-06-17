import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeToggler from "./ThemeToggler";
import LocaleToggler from "./LocaleToggler";
import LocalContext from "../context/LocaleContext";
import { mainPage } from "../utils/content";

function Header() {
  const { locale } = useContext(LocalContext);

  return (
    <header>
      <h1>
        <Link to="/">{mainPage[locale].title}</Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/archives">{mainPage[locale].nav.archives}</Link>
          </li>
        </ul>
      </nav>
      <LocaleToggler />
      <ThemeToggler />
    </header>
  );
}

export default Header;
