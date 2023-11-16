import "./Register.css";
import api from "../../../api/axiosConfig";
import { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!passwordMatches()) {
      changeErrorMessage("Las contraseñas no coinciden");
    } else {
      try {
        const response = await api.post("/api/v1/auth/login", {
          username: username,
          password: password,
        });
      } catch (e) {
        changeErrorMessage("La contraseña o el usuario ingresado no existen");
      }
    }
  }

  function passwordMatches() {
    return password === confirmPassword;
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
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
          <h2 className="text-center mt-4">Registrarse</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
              <label htmlFor="text">Correo electrónico</label>
              <input
                onChange={(e) => handleChangeEmail(e)}
                type="text"
                className="form-control"
                id="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="text">Usuario</label>
              <input
                onChange={(e) => handleChangeUsername(e)}
                type="text"
                className="form-control"
                id="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                onChange={(e) => handleChangePassword(e)}
                type="password"
                className="form-control"
                id="password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirmar Contraseña</label>
              <input
                onChange={(e) => handleChangeConfirmPassword(e)}
                type="password"
                className="form-control"
                id="confirmPassword"
              />
            </div>
            <p>{errorMessage}</p>
            <div className="button-container">
              <button type="submit" className="btn btn-primary btn-block">
                Crear una cuenta
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
