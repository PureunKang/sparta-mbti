import { PATHS } from "../constants/paths";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Mypage from "../pages/Mypage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: PATHS.HOME, element: <Home /> },
  { path: PATHS.LOGIN, element: <Login /> },
  { path: PATHS.REGISTER, element: <Register /> },
  { path: PATHS.MYPAGE, element: <Mypage /> },
]);

export default router;
