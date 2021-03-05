import React, { useState } from "react";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Button,
} from "reactstrap";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Store/User/user.actions";
import { Link } from "react-router-dom";


export default function NavAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLogged, userName /* userId */ } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const toggle = () => setIsOpen(!isOpen);

  console.log("isLogged = ", isLogged);

  return (
    <>
      <Navbar light expand="sm" id="nav-admin">
        <NavbarToggler
          onClick={toggle}
          color="info"
          id="nav-admin-toggle"
          style={{ width: "100%", padding: 0 }}
        >
          <div
            className="navbar-btn"
            id="first-nav-item"
            color="mutted"
            style={{ width: "100%", margin: "0.5rem 0" }}
          >
            Administração
          </div>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="navbar-item">
              <Link to="/registrar/animal">
                {" "}
                <Button className="navbar-btn" id="first-nav-item" color="warning">
                  Registrar animal
                </Button>
              </Link>
            </NavItem>
          </Nav>
          {isLogged && (
            <Nav className="mr-auto" id="nav-login" navbar>
              <NavItem className="navbar-item">
                <p style={{ margin: 0 }} id="nav-username">
                  Usuário: {userName}
                </p>
              </NavItem>
              <NavItem className="navbar-item">
                <Button
                  className="navbar-btn"
                  color="danger"
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  Sair
                </Button>
              </NavItem>
            </Nav>
          )}
        </Collapse>
      </Navbar>
    </>
  );
}
