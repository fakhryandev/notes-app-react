import { useState } from "react";

function useLocale() {
  const [locale, setLocale] = useState("id");

  const changeLocale = (val) => {
    setLocale(val);
    localStorage.setItem("locale", val);
  };

  return [locale, changeLocale];
}

export default useLocale;
