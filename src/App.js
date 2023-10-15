import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import IndexPage from "./Page/IndexPage";
import CategoryProduct from "./components/CategoryProduct/CategoryProduct";
import DetailProduct from "./components/DetailProduct/DetailProduct";
import Login from "./Page/Login/Login";
import Register from "./Page/Register/Register";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />}>
          <Route path="/category" element={<CategoryProduct />}></Route>
          <Route path="/detail" element={<DetailProduct />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
