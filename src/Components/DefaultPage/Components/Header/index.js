import React from "react";
import "./index.css";
import image from "../../../../Utils/images/banner.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div id="header">
      <Link to="/" style = {{display:'flex'}}>
        <img src={image} id="img-banner" alt="img-banner" />
      </Link>
    </div>
  );
}
