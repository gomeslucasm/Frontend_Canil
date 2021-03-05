import React from "react";
import { Sidebar } from "primereact/sidebar";
import "./index.css";
import AdminMenu from "./AdminMenu/index";

const SideBarAdmin = ({visible, visibleCallback}) => {

  return (
    <>
      <Sidebar
        visible={visible}
        position="left"
        onHide={() => visibleCallback()}
        className="side-bar-menu-admin"
      >
        <h1 className="p-panelmenu-header" style={{ marginRight: "3rem" }}>
          Menu
        </h1>
        <AdminMenu />
      </Sidebar>
    </>
  );
};


export default SideBarAdmin;
