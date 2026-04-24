import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Users from "../Pages/Users";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="login/" element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}
