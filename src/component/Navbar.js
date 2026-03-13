import React from "react";
import "./Navbar.css";
import logo from "../assets/company logo.png";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>

      <ul className="nav-links">
        <li>Home ▾</li>
        <li>About Us</li>
        <li>Services ▾</li>
        <li>Cyber Security ▾</li>
        <li>Career</li>
        <li>Blog ▾</li>
        <li>Contact</li>
      </ul>

      <button className="contact-btn">Contact Us</button>

    </nav>
  );
}

export default Navbar;