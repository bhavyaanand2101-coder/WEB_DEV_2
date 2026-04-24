import { useApp } from "../context/AppContext";

export default function Cart() {
  const { cart, removeFromCart } = useApp();

  const total = cart.reduce((acc, i) => acc + Number(i.price || 0), 0);

  return (
    <div style={{ padding: 20 }}>
      <h2>Cart</h2>

      {cart.length === 0 && <p>Empty</p>}

      {cart.map(i => (
        <div key={i.id}>
          <img src={i.image} style={{ height: 80 }} />
          <h4>{i.title}</h4>
          <p>₹ {Number(i.price).toFixed(2)}</p>
          <button onClick={()=>removeFromCart(i.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹ {total.toFixed(2)}</h3>
    </div>
  );
}