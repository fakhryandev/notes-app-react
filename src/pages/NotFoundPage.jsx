import { useContext } from "react";
import LocaleContext from "../context/LocaleContext";
import { mainPage } from "../utils/content";

const NotFoundPage = () => {
  const { locale } = useContext(LocaleContext);

  return (
    <section>
      <h1>404</h1>
      <h2>{mainPage[locale].pageNotFound}</h2>
    </section>
  );
};

export default NotFoundPage;
