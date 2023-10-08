import React from 'react';
import './style.css';

function ImageWithCaption() {
    return (
        <div className="conatiner">
            <div>
                <a className="image-link">
                    <img src={process.env.PUBLIC_URL + '/img/anh1.jpg'} alt="Image" />
                    
                </a>
                <a className="image-link">
                    <img src={process.env.PUBLIC_URL + '/img/anh2.jpg'} alt="Image" />
                </a>
                <a className="image-link">
                    <img src={process.env.PUBLIC_URL + '/img/anh3.jpg'} alt="Image" />
                </a>
            </div>
        </div>
    );
}

export default ImageWithCaption;