import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setuser] = useState(
    JSON.parse(localStorage.getItem("user")) || null,
  );

  const login = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    setuser(user);
    setToken(token);
  };

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  setToken(null);
  setuser(null);
};

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
