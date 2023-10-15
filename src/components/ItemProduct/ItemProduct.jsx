import React from "react";
import "./ItemProduct.css";
import thumb from "../../assets/img/Rectangle109.png";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const ItemProduct = () => {
  return (
    <article className="product">
      <FavoriteBorderOutlinedIcon
        style={{ position: "absolute", right: "15px", top: "15px" }}
      />
      <div className="slect_product">
        <div className="product_img">
          <img src={thumb} alt="" />
        </div>
        <div className="product_name">
          <p className="name">Jordan delta</p>
          <div className="price">4.000.000 VNĐ</div>
        </div>
      </div>
    </article>
  );
};

export default ItemProduct;
