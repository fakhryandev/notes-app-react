import useTheme from "../hooks/useTheme";

export default function ThemeToggler() {
  const [theme, changeTheme] = useTheme();

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
