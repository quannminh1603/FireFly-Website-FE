import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
// import process from "process";
import IndexPage from "./Page/IndexPage";
import CategoryProduct from "./components/CategoryProduct/CategoryProduct";
import DetailProduct from "./components/DetailProduct/DetailProduct";
import Login from "./Page/Login/Login"
import Register from "./Page/Register/Register";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Contact from "./components/Contact/Contact";
import NewProducts from "./components/Products/NewProducts/NewProducts";
import AdidasProducts from "./components/Products/AdidasProducts/AdidasProducts";
import NikeProducts from "./components/Products/NikeProducts/NikeProducts";
import ShoesProducts from "./components/Products/ShoesProducts/ShoesProducts";
import ClothesProducts from "./components/Products/ClothesProducts/ClothesProducts";
import About from "./components/About/About";

function App() {
  // useEffect(() => {
  //   fetchApi()
  // }, [])
  // console.log('process.env.REACT_APP_API_KEY', process.env.REACT_APP_API_KEY)
  // const fetchApi = async () => {
  //   const res = await axios.get(`${process.env.REACT_APP_API_KEY}/product/getAll-product`)
  //   // console.log('res', res)
  //   return res.data
  // }
  // const query = useQuery({ queryKey: ['todos'], queryFn: fetchApi })
  // console.log('query', query)

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
          <Route path="/about" element={<About />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './redux/slice/counterSlice'

// function App() {
//   const count = useSelector((state) => state.counter.value)
//   const dispatch = useDispatch()

//   return (
//     <div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           Increment
//         </button>
//         <span>{count}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//       </div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           Increment
//         </button>
//         <span>{count}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//       </div>
//     </div>
//   )
// }

// export default App;