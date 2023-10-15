import React, { useState } from "react";
import img from "../../assets/img/sanphammoi1.jpg";
import { Button } from "@mui/material";
import "./Cart.css";
const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseValue = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const increaseValue = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <div>
      <div className="select_cart">
        <div className="cart_left">
          <h4>Giỏ hàng của bạn</h4>
          <div className="list_cart">
            <article className="cart">
              <div className="cart_img">
                <img src={img} alt="" />
              </div>
              <div className="infor_product">
                Jordan Delta 2<span>4.000.000 VNĐ </span>
              </div>
              <div className="input_quantity">
                <button onClick={decreaseValue}>-</button>
                <input
                  type="text"
                  value={quantity}
                  style={{ width: "50px", textAlign: "center" }}
                  readOnly
                />
                <button onClick={increaseValue}>+</button>
              </div>
              <div className="total">4.000.000 VNĐ</div>
            </article>
          </div>
        </div>
        <div className="cart_right">
          <h4>Tổng thanh toán</h4>
          <div className="bill_detail">
            <div className="total_cost">
              Tổng tiền hàng <span>4.000.000 VNĐ </span>
            </div>
            <div className="total_discount">
              Tổng giảm giá <span>0 VNĐ </span>
            </div>
          </div>
          <hr />
          <Button
            size="large"
            sx={{
              margin: "20px 0",
              color: "#000",
              background: "rgba(0, 126, 112, 0.8)",
            }}
          >
            Mua hàng
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
