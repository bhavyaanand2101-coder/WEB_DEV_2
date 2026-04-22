import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

function Home() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  // This "useEffect" runs as soon as the page opens
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-4 gap-5">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded shadow">
          <img src={product.image} alt="" className="h-40 mx-auto" />
          <h2 className="font-bold h-12 overflow-hidden">{product.title}</h2>
          <p className="text-green-600 font-bold">${product.price}</p>
          <button 
            onClick={() => dispatch(addToCart(product))}
            className="bg-yellow-400 p-2 mt-2 w-full rounded hover:bg-yellow-500"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
export default Home;