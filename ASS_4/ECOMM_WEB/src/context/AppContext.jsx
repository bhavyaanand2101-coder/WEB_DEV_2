import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("none");

  const addToCart = (p) => {
    setCart(prev => {
      const exist = prev.find(x => x.id === p.id);
      if (exist) return prev.map(x => x.id === p.id ? {...x, qty: x.qty + 1} : x);
      return [...prev, {...p, qty: 1}];
    });
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(x => x.id !== id));
  
  const updateQty = (id, val) => {
    setCart(prev => prev.map(x => x.id === id ? {...x, qty: Math.max(1, x.qty + val)} : x));
  };

  return (
    <AppContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, search, setSearch, dark, setDark, category, setCategory, sort, setSort }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);