import { useContext } from "react";
import LocaleContext from "../context/LocaleContext";
import { mainPage } from "../utils/content";

export default function LoadingIndicator() {
  const { locale } = useContext(LocaleContext);
  return <p>{mainPage[locale].message.loading}</p>;
}
