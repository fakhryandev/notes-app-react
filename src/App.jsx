import React, { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import AddPage from "./pages/AddPage";
import ArchivesPage from "./pages/ArchivesPage";
import DetailPageWrapper from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { getUserLogged } from "./utils/network-data";
import AuthContext from "./context/AuthContext";
import ThemeContext from "./context/ThemeContext";
import LocaleContext from "./context/LocaleContext";
import useTheme from "./hooks/useTheme";
import useLocale from "./hooks/useLocale";
import Routes from "./routes";

const App = () => {
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

    [theme]
  );

  const localeContextValue = useMemo(
    () => ({
      locale,
      changeLocale,
    }),
    [locale]
  );

  useEffect(() => {
    const fetchUserLoggedIn = async () => {
      const userLoggedIn = await getUserLogged();
      if (!userLoggedIn.error) {
        setAuth(userLoggedIn.data);
      } else {
        setAuth(null);
      }
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
  }, []);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
        <AuthContext.Provider value={authContextValue}>
          <div className="app-container">
            <Header />
            <main>
              <Routes />
              {/* <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/archives" element={<ArchivesPage />} />
              <Route path="/notes/new" element={<AddPage />} />
              <Route path="/notes/:id" element={<DetailPageWrapper />} />
              </Routes> */}
            </main>
          </div>
        </AuthContext.Provider>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
