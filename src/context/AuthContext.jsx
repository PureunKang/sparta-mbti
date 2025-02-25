import { createContext, useState } from "react";

export const AuthContext = createContext();

const data = JSON.parse(localStorage.getItem("userData")) || false;

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!data);
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{ setIsAuthenticated, isAuthenticated, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
