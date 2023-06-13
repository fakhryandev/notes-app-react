import { Link, useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import RegisterForm from "../components/RegisterForm";
import { register } from "../utils/network-data";

const RegisterPage = () => {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    try {
      e.preventDefault();

      if (password !== confirmPassword) throw new Error("Password tidak cocok");
      const result = await register({ name, email, password });

      if (!result.error) {
        navigate("/");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="register-page">
      <h2>isi form untuk mendaftar akun.</h2>
      <RegisterForm
        name={name}
        onNameChange={onNameChange}
        email={email}
        onEmailChange={onEmailChange}
        password={password}
        onPasswordChange={onPasswordChange}
        confirmPassword={confirmPassword}
        onConfirmPasswordChange={onConfirmPasswordChange}
        handleRegister={handleRegister}
      />
      <p>
        Sudah punya akun? <Link to="/">Daftar di sini</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
