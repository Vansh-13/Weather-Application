import React from "react";
import "./Header.css"; 
import logoimage from "../images/logoimage.png"
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img
          src={logoimage}
          alt="Weather Logo"
          className="image-logo"
        />
        <h1 className="title">WeatherSphere</h1>
      </div>
      <span className="live">Live Weather Updates 🌧️</span>
    </header>
  );
}

export default Header;
