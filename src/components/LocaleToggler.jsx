import { useContext } from "react";
import LocalContext from "../context/LocaleContext";

export default function LocaleToggler() {
  const { locale, changeLocale } = useContext(LocalContext);

  return (
    <button
      type="button"
      className="toggle-locale"
      onClick={() => changeLocale(locale === "id" ? "en" : "id")}
    >
      {locale === "id" ? "en" : "id"}
    </button>
  );
}
