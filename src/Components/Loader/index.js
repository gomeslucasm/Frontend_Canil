import React from "react";
import "./index.css";
import image from "../../Utils/images/dogecat.png";

function Loader() {
  return (
    <>
      <div id="border-loader">
        <img src={image} id="img-loader" alt = "img-loader" />
        <p className="loading">Carregando</p>
      </div>
    </>
  );
}

export default Loader;
