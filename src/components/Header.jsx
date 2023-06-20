import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggler from "./ThemeToggler";
import LocaleToggler from "./LocaleToggler";
import LocalContext from "../context/LocaleContext";
import { mainPage } from "../utils/content";
import LogoutButton from "./LogoutButton";
import AuthContext from "../context/AuthContext";

function Header() {
  const { auth } = useContext(AuthContext);
  const { locale } = useContext(LocalContext);
  const { pathname } = useLocation();

  return (
    <header>
      <h1>
        <Link to="/">{mainPage[locale].title}</Link>
      </h1>
      {auth && (
        <nav className="navigation">
          <ul>
            <li>
              {pathname !== "/archives" ? (
                <Link to="/archives">{mainPage[locale].nav.archives}</Link>
              ) : (
                <Link to="/">{mainPage[locale].nav.home}</Link>
              )}
            </li>
          </ul>
        </nav>
      )}
      <LocaleToggler />
      <ThemeToggler />
      <LogoutButton />
    </header>
  );
}

export default Header;
