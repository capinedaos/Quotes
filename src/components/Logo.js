import React from "react";
import "../styles/Logo.css";
import academloLogo from "../images/Logo.png";

const Logo = ({ randomColor, colors }) => {
  return (
    <div className="logo">
      <h1 style={{ color: colors[randomColor] }}>Deliverable one</h1>
      <img src={academloLogo} alt="Logo Academlo" />
    </div>
  );
};

export default Logo;
