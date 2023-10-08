import React from 'react'
import ImageWithCaption from '../ImageWithCaption/ImageWithCaption';
const navbar = () => {
    const titleStyle = {
        width: '100%',
        height: '100%',
    };

    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active ">
                    <img style={titleStyle} src="img/baner.jpg" />



                </div>


            </div>
            

        </div>


    )
}
export default navbar