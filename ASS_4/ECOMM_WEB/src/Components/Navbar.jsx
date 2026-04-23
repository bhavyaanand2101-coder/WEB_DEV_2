import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className="bg-black text-white p-4 flex justify-between">

      <div className="flex gap-4">
        <Link to="/home">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>

      <div className="flex gap-4">

        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : (
          <>
            <span>{user.email}</span>
            <button onClick={logout}>Logout</button>
          </>
        )}

      </div>

    </div>
  );
}