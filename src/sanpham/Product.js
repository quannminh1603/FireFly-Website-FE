
import React from 'react';

function Product({ name, price, isFeatured }) {
  return (
    <div className={`product ${isFeatured ? 'featured' : ''}`}>
      <h2>{name}</h2>
      <p>Giá: {price}</p>
    </div>
  );
}

export default Product;
