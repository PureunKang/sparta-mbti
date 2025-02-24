import { PATHS } from "../constants/paths";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Mypage from "../pages/Mypage";
import Test from "../pages/Test";
import TestResult from "../pages/TestResult";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: PATHS.HOME, element: <Home /> },
      {
        path: PATHS.LOGIN,
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: PATHS.REGISTER,
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },
      {
        path: PATHS.MYPAGE,
        element: (
          <PrivateRoute>
            <Mypage />
          </PrivateRoute>
        ),
      },
      {
        path: PATHS.TEST,
        element: (
          <PrivateRoute>
            <Test />
          </PrivateRoute>
        ),
      },
      {
        path: PATHS.TEST_RESULTS,
        element: (
          <PrivateRoute>
            <TestResult />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
