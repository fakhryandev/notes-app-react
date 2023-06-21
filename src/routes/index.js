import { useRoutes } from "react-router-dom";
import RouteMiddleware from "../middleware/RouteMiddleware";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ArchivesPage from "../pages/ArchivesPage";
import DetailPage from "../pages/DetailPage";
import AddPage from "../pages/AddPage";
import NotFoundPage from "../pages/NotFoundPage";

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
          <RegisterPage />
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
    {
      path: "/archives",
      element: (
        <RouteMiddleware access="private">
          <ArchivesPage />
        </RouteMiddleware>
      ),
    },
    {
      path: "/notes/:id",
      element: (
        <RouteMiddleware access="private">
          <DetailPage />
        </RouteMiddleware>
      ),
    },
    {
      path: "/notes/new",
      element: (
        <RouteMiddleware access="private">
          <AddPage />
        </RouteMiddleware>
      ),
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

export default Routes;
