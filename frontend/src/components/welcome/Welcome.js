import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa los estilos de Bootstrap

function Welcome({ username, isLoggedIn }) {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (isLoggedIn) {
        setShowWelcome(false);
      }
    }, 2000);
  }, [isLoggedIn, username, showWelcome]);

  return (
    <section className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <div
            className={`alert ${
              showWelcome && isLoggedIn ? "alert-success" : "d-none"
            }`}
          >
            <h2 className="alert-heading">Welcome {username}!</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
