import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import useInput from "../hooks/useInput";
import { login, putAccessToken } from "../utils/network-data";

const LoginPage = () => {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      const result = await login({ email, password });

      if (!result.error) {
        putAccessToken(result.data.accessToken);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="login-page">
      <h2>Yuk, login untuk menggunakan aplikasi.</h2>
      <LoginForm
        email={email}
        password={password}
        onEmailChange={onEmailChange}
        onPasswordChange={onPasswordChange}
        handleLogin={handleLogin}
      />
      <p>
        Belum punya akun? <Link to="/register">Daftar di sini</Link>
      </p>
    </div>
  );
};

export default LoginPage;
