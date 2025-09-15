import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "../Css/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const token = Cookies.get("authToken");

  // 🔥 Auto logout check
  useEffect(() => {
    const interval = setInterval(() => {
      const tokenCheck = Cookies.get("authToken");
      if (!tokenCheck) {
        navigate("/login");
      }
    }, 3000); // har 3 sec me check karega
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <nav className={`navbar ${isOpen ? "active" : ""}`}>
      <div className="navbar-logo">MegaMart</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {!token && (
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
