import "./Register.css";
import api from "../../../api/axiosConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  function goLogin() {
    navigate("/login");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!passwordMatches()) {
      changeErrorMessage("Passwords do not match");
    } else {
      try {
        const response = await api.post("/api/v1/auth/register", {
          username: username,
          password: password,
        });
        changeSuccessMessage("Registration Successful");
        setTimeout(() => {
          goLogin();
        }, 1000);
      } catch (e) {
        changeErrorMessage("Invalid username or password");
      }
    }
  }

  function passwordMatches() {
    return password === confirmPassword;
  }

  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleChangeConfirmPassword(e) {
    setConfirmPassword(e.target.value);
  }

  function changeSuccessMessage(str) {
    setSuccessMessage(str);
    setTimeout(function () {
      setSuccessMessage("");
    }, 1000);
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
          <h2 className="text-center mt-4">Register</h2>
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
            <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <input
                onChange={(e) => handleChangeConfirmPassword(e)}
                type="password"
                className="form-control"
                id="confirmPassword"
              />
            </div>
            <p style={{ color: "#5EFF6B" }}>{successMessage}</p>
            <p>{errorMessage}</p>
            <div className="button-container">
              <button type="submit" className="btn btn-warning btn-block">
                Create an account
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
