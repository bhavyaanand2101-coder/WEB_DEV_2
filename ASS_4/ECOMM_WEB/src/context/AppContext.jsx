import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);
  const [sort, setSort] = useState("none");
  const [category, setCategory] = useState("all");

  const addToCart = (p) => {
    const clean = {
      id: p.id,
      title: p.title,
      price: Number(p.price),
      image: p.image,
      category: p.category
    };
    setCart(prev => [...prev, clean]);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  return (
    <AppContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      search,
      setSearch,
      dark,
      setDark,
      sort,
      setSort,
      category,
      setCategory
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);