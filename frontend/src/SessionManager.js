import { useState } from "react";

const SessionManager = () => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken || "");

  const handleLogin = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", JSON.stringify(newToken));
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return {
    token,
    handleLogin,
    handleLogout,
  };
};

export default SessionManager;
