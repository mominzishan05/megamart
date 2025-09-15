import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "../Css/LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy check
    if (email === "emilys" && password === "emilyspass") {
      // Cookie set (10 min expiry)
      Cookies.set("authToken", "fake-jwt-token", { expires: 5 / 1440 }); 
      navigate("/");
    } else {
      alert("Login failed! Check username/password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back 🍦</h2>
        <p className="login-subtitle">Login to continue</p>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="login-footer">
          <p>
            Don’t have an account? <a href="/signup">Sign Up</a>
          </p>
          <p>Email : <b>emilys</b></p>
          <p>Password : <b>emilyspass</b></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
