import { useApp } from "../context/AppContext";

export default function ProductCard({ product }) {
  const { addToCart } = useApp();

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">

      <div className="h-40 flex items-center justify-center">
        <img
          src={product.image}
          className="h-full object-contain"
        />
      </div>

      <h2 className="text-sm font-medium mt-3 line-clamp-2">
        {product.title}
      </h2>

      <p className="text-green-600 font-bold mt-2">
        ₹{Math.round(product.price * 80)}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-black text-white py-2 rounded hover:bg-gray-800"
      >
        Add to Cart
      </button>
    </div>
  );
}