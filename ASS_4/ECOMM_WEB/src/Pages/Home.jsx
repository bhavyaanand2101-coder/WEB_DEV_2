import { useEffect, useState, useMemo } from "react";
import { useApp } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const { search, category, setCategory, sort, setSort } = useApp();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then(res => res.json()).then(setProducts);
  }, []);

  const filtered = useMemo(() => {
    let data = products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
    if (category !== "all") {
        if (category === "men") data = data.filter(p => p.category === "men's clothing");
        else if (category === "women") data = data.filter(p => p.category === "women's clothing");
        else data = data.filter(p => p.category === category);
    }
    if (sort === "low") data.sort((a,b) => a.price - b.price);
    if (sort === "high") data.sort((a,b) => b.price - a.price);
    return data;
  }, [products, search, category, sort]);

  return (
    <div>
      {/* FILTER BAR AT TOP */}
      <section className="filter-bar">
        <div className="filter-container">
          <div className="filter-group">
            <h3>Categories</h3>
            {['all', 'men', 'women', 'electronics', 'jewelery'].map(c => (
              <label key={c} className="filter-label">
                <input type="radio" name="cat" onChange={() => setCategory(c)} checked={category === c} />
                <span style={{textTransform: 'capitalize'}}>{c}</span>
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h3>Sort By</h3>
            <select 
                style={{padding: '8px', borderRadius: '8px', background: 'var(--bg)', color: 'var(--text-main)', border: '1px solid var(--border)'}} 
                onChange={(e) => setSort(e.target.value)}
            >
              <option value="none">Latest Products</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <main className="grid-container">
        <div className="products-grid">
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </main>
    </div>
  );
}