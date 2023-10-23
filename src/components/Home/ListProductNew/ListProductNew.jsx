import React from "react";
import "./ListProductNew.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

// import thumb from "../../../assets/img/Rectangle24.png";
// import thumb2 from "../../../assets/img/anh1.jpg"
import jordan1 from "../../../assets/img/jordan1.jpg"
import jordan2 from "../../../assets/img/jordan2.jpg"
import jordan3 from "../../../assets/img/jordan3.jpg"
import jordan4 from "../../../assets/img/jordan4.jpg"

const ListProductNew = () => {
  return (
    <div className="list_product_new">
      <div className="list_items_new">
        <article className="product_new">
          <div className="slect_product_new">
            <div className="product_img_new">
              <img src={jordan1} alt="" />
              {/* <FontAwesomeIcon icon="fas fa-cart-plus" style={{color: "#ffffff",}} /> */}
              {/* <FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{color: "#ffffff",}} /> */}
              <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{color: "#fff",}} /></a>
            </div>
            <div className="product_name_new">
              <p className="name_new">Giày Air Jordan 1 Low ‘White Industrial Blue Siren Red’ FV3622-141</p>
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <div className="price_new">4.890.000₫</div>
            </div>
          </div>
        </article>
        <article className="product_new">
          <div className="slect_product_new">
            <div className="product_img_new">
              <img src={jordan2} alt="" />
              <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{color: "#fff",}} /></a>
            </div>
            <div className="product_name_new">
              <p className="name_new">Giày (WMNS) Air Jordan 1 Low ‘Sky J Orange’ DC0774-080</p>
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <div className="price_new">4.290.000đ</div>              <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{color: "#fff",}} /></a>
            </div>
          </div>
        </article>
        <article className="product_new">
          <div className="slect_product_new">
            <div className="product_img_new">
              <img src={jordan3} alt="" />
              <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{color: "#fff",}} /></a>
            </div>
            <div className="product_name_new">
              <p className="name_new">(WMNS) Air Jordan 1 Low ‘Multi-Color Sashiko’ FV3623-151</p>
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <div className="price_new">4.890.000₫</div>
            </div>
          </div>
        </article>
        <article className="product_new">
          <div className="slect_product_new">
            <div className="product_img_new">
              <img src={jordan4} alt="" />
              <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{color: "#fff",}} /></a>
            </div>
            <div className="product_name_new">
              <p className="name_new">Giày Nike Air Force 1 Low Classics ’50 Years Of Hip-Hop’ DV7183-100</p>
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <FontAwesomeIcon icon={faStar} className="starIcon" style={{color: "#fbff00",}} />
              <div className="price_new">4.690.000đ</div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ListProductNew;
