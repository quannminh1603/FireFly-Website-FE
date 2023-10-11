import React from 'react';
import './ProductList.css';

const ProductList = () => {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            image: 'img/sanphammoi.jpg',
        },
        {
            id: 2,
            name: 'Product 2',
            image: 'img/sanphammoi1.jpg',
        },
        {
            id: 3,
            name: 'Product 3',
            image: 'img/sanphammoi2.jpg',
        },
    ];

    return (
        <div className='Productlist'>
           
            <h1>Sản Phẩm Mới</h1>
            
            <div className="product-list">
               
                {products.map((product) => (
                    <div key={product.id} className="product-item">
                        <img src={process.env.PUBLIC_URL + '/' + product.image} alt={product.name} />
                       
                            <h3>{product.name}</h3>
                       
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;