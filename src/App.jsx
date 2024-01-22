import React, { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import { getUserLogged } from "./utils/network-data";
import AuthContext from "./context/AuthContext";
import ThemeContext from "./context/ThemeContext";
import LocaleContext from "./context/LocaleContext";
import useTheme from "./hooks/useTheme";
import useLocale from "./hooks/useLocale";
import Routes from "./routes";
import LoadingIndicator from "./components/LoadingIndicator";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(null);
  const [theme, changeTheme] = useTheme();
  const [locale, changeLocale] = useLocale();

  const authContextValue = useMemo(
    () => ({
      auth,
      setAuth,
    }),
    [auth]
  );

  const themeContextValue = useMemo(
    () => ({
      theme,
      changeTheme,
    }),

    [theme, changeTheme]
  );

  const localeContextValue = useMemo(
    () => ({
      locale,
      changeLocale,
    }),
    [locale, changeLocale]
  );

  useEffect(() => {
    const fetchUserLoggedIn = async () => {
      const userLoggedIn = await getUserLogged();
      if (!userLoggedIn.error) {
        setAuth(userLoggedIn.data);
      } else {
        setAuth(null);
      }
      setLoading(false);
    };
    fetchUserLoggedIn();

    if (localStorage.locale) {
      changeLocale(localStorage.locale);
    } else {
      localStorage.setItem("locale", "id");
      changeLocale("id");
    }

    if (localStorage.theme) {
      changeTheme(localStorage.theme);
    } else {
      localStorage.setItem("theme", "dark");
      changeTheme("dark");
    }
  }, [changeLocale, changeTheme]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
        <AuthContext.Provider value={authContextValue}>
          <div className="app-container">
            <Header />
            <main>{loading ? <LoadingIndicator /> : <Routes />}</main>
          </div>
        </AuthContext.Provider>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
