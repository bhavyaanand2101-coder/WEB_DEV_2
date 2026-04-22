import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { useSelector } from 'react-redux';

function App() {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div>
      {/* This is our simple Navbar */}
      <nav className="p-4 bg-blue-600 text-white flex justify-between">
        <Link to="/" className="font-bold">MY SHOP</Link>
        <Link to="/cart">🛒 Cart ({cartItems.length})</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
export default App;