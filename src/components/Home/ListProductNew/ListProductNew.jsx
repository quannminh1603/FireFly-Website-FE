import React from "react";
import "./ListProductNew.css";

import thumb from "../../../assets/img/Rectangle24.png";
const ListProductNew = () => {
  return (
    <div className="list_product_new">
      <div className="list_items_new">
        <article className="product_new">
          <div className="slect_product_new">
            <div className="product_img_new">
              <img src={thumb} alt="" />
            </div>
            <div className="product_name_new">
              <p className="name_new">Jordan delta</p>
              <div className="price_new">4.000.000 VNĐ</div>
            </div>
          </div>
        </article>
        <article className="product_new">
          <div className="slect_product_new">
            <div className="product_img_new">
              <img src={thumb} alt="" />
            </div>
            <div className="product_name_new">
              <p className="name_new">Jordan delta</p>
              <div className="price_new">4.000.000 VNĐ</div>
            </div>
          </div>
        </article>
        <article className="product_new">
          <div className="slect_product_new">
            <div className="product_img_new">
              <img src={thumb} alt="" />
            </div>
            <div className="product_name_new">
              <p className="name_new">Jordan delta</p>
              <div className="price_new">4.000.000 VNĐ</div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ListProductNew;
