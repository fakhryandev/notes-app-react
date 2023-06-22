import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import useInput from "../hooks/useInput";
import { getUserLogged, login, putAccessToken } from "../utils/network-data";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import LocaleContext from "../context/LocaleContext";
import { loginPage } from "../utils/content";

const LoginPage = () => {
  const { locale } = useContext(LocaleContext);
  const { setAuth } = useContext(AuthContext);
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      const result = await login({ email, password });

      if (!result.error) {
        putAccessToken(result.data.accessToken);
      }

      const userLogged = await getUserLogged();

      if (!userLogged.error) {
        setAuth(userLogged.data);
      } else {
        setAuth(null);
      }

      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="login-page">
      <h2>{loginPage[locale].welcomeText}</h2>
      <LoginForm
        email={email}
        password={password}
        onEmailChange={onEmailChange}
        onPasswordChange={onPasswordChange}
        handleLogin={handleLogin}
      />
      <p>
        {loginPage[locale].registerQuestion}{" "}
        <Link to="/register">{loginPage[locale].registerLink}</Link>
      </p>
    </div>
  );
};

export default LoginPage;
