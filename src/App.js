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
import NewProducts from "./components/Products/NewProducts/NewProducts";
import AdidasProducts from "./components/Products/AdidasProducts/AdidasProducts";
import NikeProducts from "./components/Products/NikeProducts/NikeProducts";
import ShoesProducts from "./components/Products/ShoesProducts/ShoesProducts";
import ClothesProducts from "./components/Products/ClothesProducts/ClothesProducts";

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
          <Route path="/newproducts" element={<NewProducts />}></Route>
          <Route path="/adidasproducts" element={<AdidasProducts />}></Route>
          <Route path="/nikeproducts" element={<NikeProducts />}></Route>
          <Route path="/shoesproducts" element={<ShoesProducts />}></Route>
          <Route path="/clothesproducts" element={<ClothesProducts />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
