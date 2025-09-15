import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector } from "react-redux"; 
import "../Css/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const token = Cookies.get("authToken");

  // ✅ Redux se cart items count
  const cartCount = useSelector((state) => state.carts.items.length);

  // 🔥 Auto logout check
  useEffect(() => {
    const interval = setInterval(() => {
      const tokenCheck = Cookies.get("authToken");
      if (!tokenCheck) {
        navigate("/login");
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [navigate]);

  // ✅ Menu band karne ka function
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${isOpen ? "active" : ""}`}>
      <div className="navbar-logo">MegaMart</div>
      <ul className="navbar-links">
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>

        {/* ✅ Cart with badge */}
        <li className="cart-link">
          <Link to="/cart" onClick={closeMenu}>
            Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </li>

        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        {!token && (
          <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
        )}
      </ul>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span><span></span><span></span>
      </div>
    </nav>
  );
};

export default Navbar;
