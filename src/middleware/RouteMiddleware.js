import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const RouteMiddleware = ({ children, access }) => {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  if (!auth && access === "private") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (auth && access === "public") {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default RouteMiddleware;
