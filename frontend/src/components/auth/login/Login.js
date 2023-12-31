import "./Login.css";
import api from "../../../api/axiosConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ handleLogin }) {
  const navigate = useNavigate();

  function home() {
    navigate("/");
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/api/v1/auth/login", {
        username: username,
        password: password,
      });
      const token = response.data.token;
      handleLogin(token, username);
      home();
    } catch (err) {
      changeErrorMessage("Invalid username or password");
    }
  }

  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function changeErrorMessage(str) {
    setErrorMessage(str);
    setTimeout(function () {
      setErrorMessage("");
    }, 3000);
  }

  return (
    <section className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center mt-4">Login</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
              <label htmlFor="text">Username</label>
              <input
                onChange={(e) => handleChangeUsername(e)}
                type="text"
                className="form-control"
                id="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                onChange={(e) => handleChangePassword(e)}
                type="password"
                className="form-control"
                id="password"
              />
            </div>
            <p>{errorMessage}</p>
            <div className="button-container">
              <button type="submit" className="btn btn-warning btn-block">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
