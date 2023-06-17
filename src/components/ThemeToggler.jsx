import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function ThemeToggler() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      className="toggle-theme"
      onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "Terang" : "Gelap"}
    </button>
  );
}
