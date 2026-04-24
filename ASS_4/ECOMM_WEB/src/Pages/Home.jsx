import { useEffect, useState, useMemo } from "react";
import { useApp } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const { search, sort, setSort, category, setCategory } = useApp();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(r => r.json())
      .then(setProducts);
  }, []);

  const filtered = useMemo(() => {
    let data = products.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );

    if (category !== "all") {
      data = data.filter(p => p.category.includes(category));
    }

    if (sort === "low") data.sort((a,b)=>a.price-b.price);
    if (sort === "high") data.sort((a,b)=>b.price-a.price);

    return data;
  }, [products, search, sort, category]);

  return (
    <div style={{ display: "flex", padding: 20 }}>

      <div style={{ width: 200 }}>
        <h3>Sort</h3>

        <label><input type="radio" name="s" onChange={()=>setSort("low")} /> Low</label><br/>
        <label><input type="radio" name="s" onChange={()=>setSort("high")} /> High</label><br/>
        <label><input type="radio" name="s" onChange={()=>setSort("none")} /> None</label>

        <h3>Category</h3>

        <label><input type="radio" name="c" onChange={()=>setCategory("all")} /> All</label><br/>
        <label><input type="radio" name="c" onChange={()=>setCategory("men")} /> Men</label><br/>
        <label><input type="radio" name="c" onChange={()=>setCategory("women")} /> Women</label>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 10
      }}>
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>

    </div>
  );
}