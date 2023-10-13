import React from 'react';
import ImageWithCaption from '../ImageWithCaption/ImageWithCaption';

const navbar = () => {
    const titleStyle = {
        width: '100%',
        height: '100%',
        position: 'relative'
    };

    const buttonCSS = {
        width: '15%',
        margin: 'auto',
        border: '2px solid ',
        padding: '10px',
        borderRadius: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.01)',
        color: 'white',
        fontSize: '20px'


    };

    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div style={{ position: 'relative' }} className="carousel-item active">
                    <img style={titleStyle} src="img/baner.jpg" />
                    <div
                        style={{
                            position: 'absolute',
                            width: '100%',
                            textAlign: 'center',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
                            marginTop: '200px',
                            position: 'absolute',
                            backgroundColor: 'rgba(0, 0, 0, 0.01)',
                            borderRadius: '10px',
                            color: 'white'

                        }}
                    >
                        <h1 style={{fontSize:'54px'}}>Mua sắm đồ dụng cụ thể thao ở Firefly</h1>
                        <h3>Giảm giá 50% cho bộ sưu tập giày thể thao</h3>
                        <button style={buttonCSS}>Đến cửa hàng ngay</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default navbar;