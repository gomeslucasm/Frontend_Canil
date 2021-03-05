import React from "react";
import "./index.css";
import { BiUserCircle } from "react-icons/bi";
import { Button } from "reactstrap";
import { logout } from "../../../Store/User/user.actions";
import MenuIcon from "@material-ui/icons/Menu";
import { useSelector, useDispatch } from "react-redux";

export const UserSmallMenu = ({ menuCallBack }) => {
  const { userName } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="user-menu-small">
      <div style={{ display: "flex", width: "100%" }}>
        <Button
          onClick={() => {
            menuCallBack();
          }}
          color="info"
        >
          <MenuIcon />
        </Button>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div className="user-info-wrapper">
            <BiUserCircle
              className="user-icon"
              style={{ marginTop: "0.5rem" }}
            />
            <p className="user-name">{userName}</p>
          </div>
        </div>
      </div>

      <Button
        onClick={() => {
          dispatch(logout());
        }}
        color="danger"
      >
        Sair
      </Button>
    </div>
  );
};

export const UserLargeMenu = ({ menuCallBack }) => {
  const { userName } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <>
      <div className = 'user-menu-large'
      >
        <Button
          onClick={() => {
            menuCallBack();
          }}
          color="info"
        >
          <div style={{ display: "flex" }}>
            <MenuIcon />
            <p style = {{color:'white', marginLeft:'0.2rem'}}>Adminstração</p>
          </div>
        </Button>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div className="user-info-wrapper">
            <BiUserCircle />
            <p>{userName}</p>
          </div>
        </div>
        <Button
          onClick={() => {
            dispatch(logout());
          }}
          color="danger"
        >
          Sair
        </Button>
      </div>
    </>
  );
};
