import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { cart, search, setSearch, dark, setDark } = useApp();
  const { user, logout } = useAuth();

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: 10,
      background: dark ? "#1e293b" : "#fff"
    }}>
      <Link to="/">Shop</Link>

      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search..."
      />

      <button onClick={() => setDark(!dark)}>
        {dark ? "Light" : "Dark"}
      </button>

      <Link to="/cart">Cart ({cart.length})</Link>

      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
}