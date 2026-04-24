import { useApp } from "../context/AppContext";

export default function ProductCard({ product }) {
  const { addToCart } = useApp();

  return (
    <div className="product-card">
      <div className="img-wrapper">
        <img src={product.image} alt={product.title} />
      </div>
      <h4>{product.title}</h4>
      <p className="price">₹{product.price}</p>
      <button className="btn btn-primary" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}