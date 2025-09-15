import "./App.css";
import Navbar from "./Routers/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
      <BrowserRouter basename="/megamart">
        <Navbar />
        <Routes>
          {/* Default route -> LoginPage */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Protected routes */}
          <Route
            path="/home"
            element={
              <ProtectRoute>
                <HomePage />
              </ProtectRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectRoute>
                <CartPage />
              </ProtectRoute>
            }
          />

          {/* Public routes */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Agar koi galat URL ho → LoginPage */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
