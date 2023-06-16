import { useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState("dark");

  const changeTheme = (val) => {
    setTheme(val);
    const root = window.document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", val);
  };

  return [theme, changeTheme];
}

export default useTheme;
