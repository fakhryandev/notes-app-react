import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const AuthMiddleware = (Component) => {
  const { auth } = useContext(AuthContext);
  const location = useLocation();
  console.log(auth);
  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Component />;
};

export default AuthMiddleware;
