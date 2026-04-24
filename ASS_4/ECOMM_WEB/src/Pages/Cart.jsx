import { useApp } from "../context/AppContext";

export default function Cart() {
  const { cart, removeFromCart, updateQty } = useApp();
  const total = cart.reduce((s, i) => s + (i.price * i.qty), 0);

  return (
    <div className="cart-page">
      <h2 style={{marginBottom: '25px', color: 'var(--text-main)'}}>Your Shopping Bag</h2>
      <div className="cart-card">
        {cart.length === 0 ? <p style={{textAlign: 'center', padding: '40px'}}>Your bag is empty</p> : (
          <>
            {cart.map(item => (
              <div key={item.id} className="cart-item-row">
                <div className="cart-img-box">
                  <img src={item.image} alt="" />
                </div>
                <div className="cart-item-info">
                  <h4>{item.title}</h4>
                  <p style={{color: 'var(--primary)', fontWeight: '700'}}>₹{item.price}</p>
                </div>
                <div className="qty-controls">
                  <button className="btn" style={{padding: '2px 10px'}} onClick={() => updateQty(item.id, -1)}>-</button>
                  <span style={{fontWeight: '700'}}>{item.qty}</span>
                  <button className="btn" style={{padding: '2px 10px'}} onClick={() => updateQty(item.id, 1)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="btn" style={{color: 'red', background: 'none'}}>Remove</button>
              </div>
            ))}
            <div style={{marginTop: '30px', textAlign: 'right'}}>
              <h3 style={{color: 'var(--text-main)'}}>Total: ₹{total.toFixed(2)}</h3>
              <button className="btn btn-primary" style={{width: '200px'}}>Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}