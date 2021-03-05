import React from "react";
import "./index.css";
import { Button } from "primereact/button";

const FormRegister = ({ handleSubmit = () => {}, onSubmit, children }) => {
  return (
    <div>
      <div style={{ marginTop: "1rem", marginBottom: "0.5rem" }}>
        <p style={{ color: "red", display: "contents" }}>*</p> Campos
        obrigatórios
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="register-form">{children}</div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <Button
            label="Registrar animal"
            type="submit"
            icon="pi pi-check"
            iconPos="left"
            className="p-button-success"
          />
        </div>
      </form>
      <div>
        {/* <Button style={{ marginTop: "5vh" }} type="submit" color="success">
          Enviar
        </Button> */}
      </div>
    </div>
  );
};

export default FormRegister;
