import React from 'react';
import './noibat.css';

const noibat = () => {
    const products = [
        {
            id: 1,
            name: 'Jodan Delata 2',
            image: 'img/sanphammoi.jpg',
        },
        {
            id: 2,
            name: 'Jodan Delata 2',
            image: 'img/sanphammoi.jpg',
        },
        {
            id: 3,
            name: 'Jodan Delata 2',
            image: 'img/sanphammoi.jpg',
        },
        {
            id: 1,
            name: 'Jodan Delata 2',
            image: 'img/sanphammoi.jpg',
        },
        {
            id: 2,
            name: 'Jodan Delata 2',
            image: 'img/sanphammoi.jpg',
        },
        {
            id: 3,
            name: 'Jodan Delata 2',
            image: 'img/sanphammoi.jpg',
        },
        {
            id: 1,
            name: 'Jodan Delata 2',
            image: 'img/sanphammoi.jpg',
        },
        {
            id: 1,
            name: 'Jodan Delata 2',
            image: 'img/sanphammoi.jpg',
        },
    ];

    return (
        <div className='noibat'>
           
            <h1>Sản Phẩm Nổi Bật</h1>
            
            <div className="noibat-list">
               
                {products.map((product) => (
                    <div key={product.id} className="noibat-item">
                        <img src={process.env.PUBLIC_URL + '/' + product.image} alt={product.name} />
                       
                            <h3>{product.name}</h3>
                       
                    </div>
                ))}
            </div>
        </div>
    );
};

export default noibat;