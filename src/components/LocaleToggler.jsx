import { useContext } from "react";
import LocaleContext from "../context/LocaleContext";
import { FaLanguage } from "react-icons/fa";

export default function LocaleToggler() {
  const { locale, changeLocale } = useContext(LocaleContext);

  return (
    <button
      type="button"
      className="toggle-locale"
      onClick={() => changeLocale(locale === "id" ? "en" : "id")}
    >
      <FaLanguage />
    </button>
  );
}
