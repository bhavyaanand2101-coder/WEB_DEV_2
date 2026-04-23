import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./context/AuthContext";

export default function App() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar only when logged in */}
      {user && <Navbar />}

      <Routes>

        {/* 🔥 DEFAULT ROUTE → LOGIN FIRST */}
        <Route
          path="/"
          element={
            user ? <Navigate to="/home" /> : <Login />
          }
        />

        {/* HOME */}
        <Route
          path="/home"
          element={
            user ? <Home /> : <Navigate to="/" />
          }
        />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* PROTECTED CART */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        {/* fallback */}
        <Route
          path="*"
          element={<Navigate to="/" />}
        />

      </Routes>
    </div>
  );
}