import { useState } from "react";
import "./App.css";
import Navbar from "./Routers/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import CartPage from "./Components/CartPage";
import LoginPage from "./Components/LoginPage";
import { Provider } from "react-redux";
import { store } from "./App/store";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ProtectRoute from "./Routers/ProtectRoute";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Navigate to="/login" replace />} />
          {/* Protected */}
          <Route path="/" element={<ProtectRoute><HomePage /></ProtectRoute>} />
          <Route path="/cart" element={<ProtectRoute><CartPage /></ProtectRoute>} />

          {/* Public */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
