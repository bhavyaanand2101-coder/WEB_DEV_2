import { useApp } from "../context/AppContext";

export default function ProductCard({ product }) {
  const { addToCart } = useApp();

  return (
    <div style={{ border: "1px solid gray", padding: 10 }}>
      <img src={product.image} style={{ height: 120 }} />
      <h4>{product.title}</h4>
      <p>₹ {product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}