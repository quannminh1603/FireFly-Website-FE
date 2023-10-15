import React from "react";
import "./Topic.css";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import thumb from "../../../assets/img/snapedit_16962642376521.png";
import thumbCart from "../../../assets/img/snapedit_16963420116921.png";
import cls from "classnames";

const Topic = ({ isShowInverted }) => {
  return (
    <div
      className={cls("topic", {
        pink: isShowInverted,
      })}
    >
      <div className="container">
        <div
          className={cls("topic_left", {
            right: isShowInverted,
          })}
        >
          <div className="topic_img">
            <img src={thumb} alt="" />
            <p>SALE 20%</p>
          </div>
        </div>
        <div
          className={cls("topic_right", {
            left: isShowInverted,
          })}
        >
          <div className="top_right_title">
            <h3>
              Best seller <br /> giày thể thao nam
            </h3>
            <h5>Giày Adidas nam </h5>
          </div>
          <div className="price_cart">
            <div className="price">
              <p>3.999.000đ</p>
            </div>
            <ArrowRightAltOutlinedIcon className="arrow_icon" />
            <div className="cart">
              <img src={thumbCart} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
