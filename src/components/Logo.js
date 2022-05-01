import React from "react";
import "../styles/Logo.css";
import academloLogo from "../images/Logo.png";

const Logo = ({ randomColor, colors, delivery }) => {
  return (
    <div className="logo">
      <h1 style={{ color: colors[randomColor] }}>{delivery}</h1>
      <img src={academloLogo} alt="Logo Academlo" />
    </div>
  );
};

export default Logo;
