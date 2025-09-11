import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "../Css/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const token = Cookies.get("authToken");

  const handleLogout = () => {
    Cookies.remove("authToken");
    navigate("/login");
  };

  return (
    <nav className={`navbar ${isOpen ? "active" : ""}`}>
      <div className="navbar-logo">MegaMart</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {token ? (
          <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span><span></span><span></span>
      </div>
    </nav>
  );
};

export default Navbar;
