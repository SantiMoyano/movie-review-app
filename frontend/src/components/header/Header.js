import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import SessionManager from "../../SessionManager";
import "./Header.css";

function Header({ isLoggedIn }) {
  const { token, handleLogout } = SessionManager();
  const [loggedOut, setLoggedOut] = useState(false);

  useEffect(() => {}, [token, loggedOut]);

  function logout() {
    setLoggedOut(true);
    handleLogout();
  }

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="justify-content-center text-center"
    >
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "gold" }}>
          <FontAwesomeIcon icon={faVideoSlash} />
          <span className="ms-2">Gold</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </Nav>
          {isLoggedIn && !loggedOut ? (
            <>
              <div className="auth-buttons">
                <Button onClick={logout} variant="outline-warning">
                  Logout
                </Button>
              </div>
            </>
          ) : (
            <div className="auth-buttons">
              <NavLink className="nav-link" to="/login">
                <Button variant="outline-warning">Login</Button>
              </NavLink>
              <NavLink className="nav-link" to="/register">
                <Button variant="outline-warning">Register</Button>
              </NavLink>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
