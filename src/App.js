

import './App.css';
import ImageWithCaption from './ImageWithCaption/ImageWithCaption';
import Navbar from './Navbar/navbar';
// import Product from './Product';
import Menu from './menu/Menu.tsx';
import React from 'react';
import Product from './sanpham/Product';
import { products } from './App';
function App() {
  return (
    <div className='App'>

      <Navbar />
      <ImageWithCaption/>
      <Menu/>
      <Product/>

    </div>

  );
}
export function App() {
  return (
    <div className="App">
      <h1>Danh sách sản phẩm</h1>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>

      <h1>Sản phẩm nổi bật</h1>
      <div className="featured-products">
        {products
          .filter((product) => product.isFeatured)
          .map((product) => (
            <Product key={product.id} {...product} />
          ))}
      </div>
      <div className="featured-products">
        {products
          .filter((product) => product.isFeatured)
          .map((product) => (
            <Product key={product.id} {...product} />
          ))}
      </div>
      <div className="featured-products">
        {products
          .filter((product) => product.isFeatured)
          .map((product) => (
            <Product key={product.id} {...product} />
          ))}
      </div>
    </div>
  );
}


// function App() {
//   return (
//     <div>
//       <Menu/>
//     </div>
//   );
// }
// function App() {
//   return (
//     <div>
//       <Product/>
//     </div>
//   );
// }

export default App;