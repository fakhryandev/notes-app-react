import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { RxExit } from "react-icons/rx";
import LocaleContext from "../context/LocaleContext";
import { mainPage } from "../utils/content";

export default function LogoutButton() {
  const { locale } = useContext(LocaleContext);
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm(mainPage[locale].message.confirm)) {
      localStorage.removeItem("accessToken");
      setAuth(null);
      navigate("/");
    }
  };

  return (
    auth && (
      <button type="button" className="button-logout" onClick={handleLogout}>
        <RxExit />
      </button>
    )
  );
}
