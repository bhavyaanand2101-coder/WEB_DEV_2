import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { cart, search, setSearch, dark, setDark } = useApp();
  const { logout } = useAuth();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">SHOPMY</Link>
      <div className="search-container">
        <input 
          className="search-input"
          placeholder="Search products..." 
          value={search} 
          onChange={e => setSearch(e.target.value)} 
        />
      </div>
      <div className="nav-btns">
        <button className="btn btn-ghost" onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"}
        </button>
        <Link to="/cart" className="btn btn-ghost" style={{textDecoration: 'none'}}>
          🛒 Cart ({cart.length})
        </Link>
        <button onClick={logout} className="btn btn-primary" style={{width: 'auto'}}>
          Logout
        </button>
      </div>
    </nav>
  );
}