import { useState } from "react";

const SessionManager = () => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken || "");
  const initialUsername = localStorage.getItem("username");
  const [username, setUsername] = useState(initialUsername || "");

  const handleLogin = (newToken, newUsername) => {
    setToken(newToken);
    localStorage.setItem("token", JSON.stringify(newToken));
    setUsername(newUsername);
    localStorage.setItem("username", JSON.stringify(newUsername));
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
    setUsername(null);
    localStorage.removeItem("username");
  };

  return {
    token,
    username,
    handleLogin,
    handleLogout,
  };
};

export default SessionManager;
