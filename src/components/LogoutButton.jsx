import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function LogoutButton() {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Logout ya")) {
      localStorage.removeItem("accessToken");
      setAuth(null);
      navigate("/");
    }
  };

  return (
    auth && (
      <button type="button" className="button-logout" onClick={handleLogout}>
        Logout
      </button>
    )
  );
}
