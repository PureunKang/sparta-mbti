import { RouterProvider } from "react-router-dom";
import router from "./shared/router";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
};

export default App;
