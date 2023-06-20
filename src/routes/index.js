import { useRoutes } from "react-router-dom";
import RouteMiddleware from "../middleware/RouteMiddleware";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const Routes = () =>
  useRoutes([
    {
      path: "/login",
      element: (
        <RouteMiddleware access="public">
          <LoginPage />
        </RouteMiddleware>
      ),
    },
    {
      path: "/register",
      element: (
        <RouteMiddleware access="public">
          <LoginPage />
        </RouteMiddleware>
      ),
    },
    {
      path: "/",
      element: (
        <RouteMiddleware access="private">
          <HomePage />
        </RouteMiddleware>
      ),
    },
  ]);

export default Routes;
