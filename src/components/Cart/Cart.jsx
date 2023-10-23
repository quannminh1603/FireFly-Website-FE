import React, { useState } from "react";
import img from "../../assets/img/sanphammoi1.jpg";
import { Button } from "@mui/material";
import "./Cart.css";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import adidasHome1 from "../../assets/img/adidasHome1.jpg"
import adidasHome2 from "../../assets/img/adidasHome2.jpg"
import adidasHome3 from "../../assets/img/adidasHome3.jpg"
import Footer from "../Footer/Footer";
const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseValue = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const increaseValue = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <>
      <Header />
    <div>
      <div className="select_cart">
        <div className="cart_left">
          <h4>Giỏ hàng của bạn</h4>
          <div className="list_cart">
            <article className="cart">
              <div className="cart_img">
                <img src={adidasHome1} alt="" />
              </div>
              <div className="infor_product">
              <p className="name">Giày Adidas Rivalry Low TR ‘All-Star – Silver Dawn’ IE1665</p><span className="price">2.790.000đ</span>
              </div>
              <div className="input_quantity">
                <button onClick={decreaseValue}>-</button>
                <input
                  type="text"
                  value={quantity}
                  style={{ width: "40px", height: "40px", textAlign: "center", backgroundColor: "#ffecdf", border: "1px solid #000", borderRadius: "10px", padding: "4px"}}
                  readOnly
                />
                <button onClick={increaseValue}>+</button>
              </div>
              <div className="total">2.790.000đ</div>
              <div className="delete_cart">
              <FontAwesomeIcon className="icon-delete" icon={faTrashAlt} />
              </div>
            </article>
            <article className="cart">
              <div className="cart_img">
                <img src={adidasHome2} alt="" />
              </div>
              <div className="infor_product">
              <p className="name">Giày Adidas AlphaBoost V1 ‘Triple White’ HP2759</p><span className="price">3.790.000đ</span>
              </div>
              <div className="input_quantity">
                <button onClick={decreaseValue}>-</button>
                <input
                  type="text"
                  value={quantity}
                  style={{ width: "40px", height: "40px", textAlign: "center", backgroundColor: "#ffecdf", border: "1px solid #000", borderRadius: "10px", padding: "4px"}}
                  readOnly
                />
                <button onClick={increaseValue}>+</button>
              </div>
              <div className="total">3.790.000đ</div>
              <div className="delete_cart">
              <FontAwesomeIcon className="icon-delete" icon={faTrashAlt} />
              </div>
            </article>
            <article className="cart">
              <div className="cart_img">
                <img src={adidasHome3} alt="" />
              </div>
              <div className="infor_product">
              <p className="name">Giày Adidas Ultraboot light ‘Non Dyed’ HQ6338</p><span className="price">5.490.000đ</span>
              </div>
              <div className="input_quantity">
                <button onClick={decreaseValue}>-</button>
                <input
                  type="text"
                  value={quantity}
                  style={{ width: "40px", height: "40px", textAlign: "center", backgroundColor: "#ffecdf", border: "1px solid #000", borderRadius: "10px", padding: "4px"}}
                  readOnly
                />
                <button onClick={increaseValue}>+</button>
              </div>
              <div className="total">5.490.000đ</div>
              <div className="delete_cart">
              <FontAwesomeIcon className="icon-delete" icon={faTrashAlt} />
              </div>
            </article>
          </div>
        </div>
        <div className="cart_right">
          <h4>Tổng thanh toán</h4>
          <div className="bill_detail">
            <div className="total_cost">
              <p className="total_right">Tổng tiền hàng</p> <span>4.000.000 VNĐ </span>
            </div>
            <div className="total_discount">
              <p className="total_discount_right">Tổng giảm giá</p> <span>0 VNĐ </span>
            </div>
          </div>
          <hr />
          <p className="total_bill">4.000.000 đ</p>
          {/* <Button
            size="large"
            sx={{
              margin: "20px 0",
              color: "#000",
              background: "rgba(0, 126, 112, 0.8)",
            }}
          >
            Mua hàng
          </Button> */}
          <a className="btn_buy_detail_cart" href="">Mua hàng</a>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Cart;
