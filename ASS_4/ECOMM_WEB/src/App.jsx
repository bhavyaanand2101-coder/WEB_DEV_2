import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import { useAuth } from "./context/AuthContext";
import { useApp } from "./context/AppContext";

export default function App() {
  const { user } = useAuth();
  const { dark } = useApp();

  return (
    <div style={{
      background: dark ? "#0f172a" : "#f5f5f5",
      color: dark ? "white" : "black",
      minHeight: "100vh"
    }}>
      <Navbar />

      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/cart" element={user ? <Cart /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}