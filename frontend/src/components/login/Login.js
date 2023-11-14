import "./Login.css";
import api from "../../api/axiosConfig";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(username);
    console.log(password);
    try {
      const response = await api.post("/api/v1/auth/login", {
        username: username,
        password: password,
      });
    } catch (err) {
      console.log("Login fallido");
    }
  }

  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <section className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center mt-4">Iniciar Sesión</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
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
            <div className="button-container">
              <button type="submit" className="btn btn-primary btn-block">
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
