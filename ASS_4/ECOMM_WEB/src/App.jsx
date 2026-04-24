import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useApp } from "./context/AppContext";
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

export default function App() {
  const { dark } = useApp();
  const { user } = useAuth();
  const location = useLocation();
  const isAuthPage = location.pathname === "/login";

  return (
    <div className={dark ? "dark-mode" : ""}>
      {user && !isAuthPage && <Navbar />}
      <Routes>
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/cart" element={user ? <Cart /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}