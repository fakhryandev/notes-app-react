import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggler() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      className="toggle-theme"
      onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
}
