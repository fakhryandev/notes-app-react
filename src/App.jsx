import React, { useEffect, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
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
import useTheme from "./hooks/useTheme";
import authMiddleware from "./middleware/AuthMiddleware";

const App = () => {
  const [auth, setAuth] = useState(null);
  const [theme, changeTheme] = useTheme();

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
    []
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

    // if (localStorage.theme) {
    //   changeTheme(localStorage.theme);
    // } else {
    //   localStorage.setItem("theme", "dark");
    //   changeTheme("dark");
    // }

    fetchUserLoggedIn();
  }, []);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <AuthContext.Provider value={authContextValue}>
        <div className="app-container">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              {/* <Route path="/" element={<HomePage />} /> */}
              <Route path="/archives" element={<ArchivesPage />} />
              <Route path="/notes/new" element={<AddPage />} />
              <Route path="/notes/:id" element={<DetailPageWrapper />} />
            </Routes>
          </main>
        </div>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
