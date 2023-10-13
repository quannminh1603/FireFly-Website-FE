import React from 'react';
import './ProductList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fashoppingcart } from '@fortawesome/free-solid-svg-icons'
const ProductList = () => {
    const products = [
        {
            id: 1,
            name: 'Jordan delta 2 ',
            image: 'img/prices.jpg',
            price:'4.000.000 VNĐ'
        },
        {
            id: 2,
            name: ' Jordan delta 2',
            image: 'img/prices.jpg',
            price:'4.000.000 VNĐ'
        },
        {
            id: 3,
            name: 'Jordan delta 2',
            image: 'img/prices.jpg',
            price:'4.000.000 VNĐ'
        },
    ];

    return (
        <div className='Productlist'>
            <h1>Sản Phẩm Mới</h1>
            <hr className='line' />
            <div className="product-list">

                {products.map((product) => (
                    <div key={product.id} className="product-item">
                        <div className="product-image">
                            <img src={process.env.PUBLIC_URL + '/' + product.image} alt={product.name }   />
                          
                            <div className="cart-icon">
                                <i className="fa-solid fa-cart-shopping" aria-hidden="true" />

                            </div>
                        </div>
                        <h3>{product.name}</h3>
                        <h3>{product.price}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;