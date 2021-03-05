import React, { useState } from "react";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import "./index.css";
import { useSelector } from "react-redux";
import LoginForm from "../Forms/LoginForm";
import SideBarAdmin from "../SideBarAdmin";
import { Link } from "react-router-dom";
import { UserLargeMenu, UserSmallMenu } from "../NavAdmin/UserMenu/index";

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const { isLogged } = useSelector((state) => state.user);

  const toggle = () => setIsOpen(!isOpen);
  const modalToggle = () => setModal(!modal);

  return (
    <>
      <Navbar light expand="sm" id="nav-menu">
        <NavbarToggler
          onClick={toggle}
          id="nav-menu-toggler"
          style={{ width: "100%", padding: 0, backgroundColor: "#668699" }}
        >
          <div
            className="navbar-btn"
            id="first-nav-item"
            style={{ width: "100%", margin: "0.5rem 0" }}
          >
            Menu
          </div>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="navbar-item">
              <Link to="/">
                <Button className="navbar-btn" id="first-nav-item" color="info">
                  Página inicial
                </Button>
              </Link>
            </NavItem>
            <NavItem className="navbar-item">
              <Link to="/animais/">
                <Button className="navbar-btn" color="info">
                  {" "}
                  Animais
                </Button>
              </Link>
            </NavItem>
            <NavItem className="navbar-item">
              <Button className="navbar-btn" color="info">
                Doações
              </Button>
            </NavItem>
            <NavItem className="navbar-item">
              <Button className="navbar-btn" color="info">
                Empresas parceiras
              </Button>
            </NavItem>
          </Nav>
          {!isLogged && (
            <Nav className="mr-auto" id="nav-login" navbar>
              <NavItem className="navbar-item">
                <Button
                  className="navbar-btn"
                  color="success"
                  onClick={modalToggle}
                >
                  Entrar
                </Button>
              </NavItem>
            </Nav>
          )}
        </Collapse>

        {isLogged && (
          <SideBarAdmin
            visible={sidebarVisible}
            visibleCallback={() => {
              console.log("passou aqui");
              setSidebarVisible(false);
            }}
          />
        )}

        {isLogged && (
          <UserSmallMenu
            menuCallBack={() => {
              console.log("clicou");
              setSidebarVisible(true);
            }}
          />
        )}
      </Navbar>

      {isLogged && <UserLargeMenu menuCallBack={() => {
              console.log("clicou");
              setSidebarVisible(true);
            }}/>}

      <Modal isOpen={modal} toggle={modalToggle}>
        <ModalHeader style={{ display: "flex", justifyContent: "center" }}>
          Login
        </ModalHeader>
        <ModalBody>
          <LoginForm
            loginCallback={(value) => {
              console.log("login = ", value);
              setModal(false);
            }}
          />
        </ModalBody>
      </Modal>
    </>
  );
}
