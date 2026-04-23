import { useEffect, useState, useMemo } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 8;

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredProducts = useMemo(() => {
    return products
      .filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
      .filter((item) =>
        category === "all" ? true : item.category === category
      )
      .sort((a, b) => {
        if (sort === "low") return a.price - b.price;
        if (sort === "high") return b.price - a.price;
        return 0;
      });
  }, [products, search, category, sort]);

  const paginatedProducts = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  if (loading) return <h1 className="p-6">Loading...</h1>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Products</h1>

      {/* Controls */}
      <div className="flex gap-4 mb-6 flex-wrap">
        <input
          className="border p-2"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
          <option value="jewelery">Jewelry</option>
          <option value="electronics">Electronics</option>
        </select>

        <select
          className="border p-2"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {paginatedProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex gap-4 mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>

        <button
          disabled={page * itemsPerPage >= filteredProducts.length}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}