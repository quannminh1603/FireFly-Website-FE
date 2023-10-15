import { Button } from "@mui/material";
import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import thumb from "../../assets/img/5ebe8a136e995c0302ab17cb-large1.png";
import thumb1 from "../../assets/img/thumb-816x460-098c9d745898e7dc65772d890b6d501c3.png";
import "./DetailProduct.css";
import TitleComponent from "../Home/TitleComponent/TitleComponent";
import ListProduct from "../ListProduct/ListProduct";
import { TextField, FormControl, Box } from "@mui/material";
const DetailProduct = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseValue = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const increaseValue = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    console.log("Comment submitted: ", comment);

    setComment("");
  };
  return (
    <>
      <div className="detail_product">
        <div className="select_detail_product">
          <div className="detail_left">
            <div className="detail_img_big">
              <img src={thumb} alt="" />
            </div>
            <div className="detail_img_small">
              <img src={thumb1} alt="" />
              <img src={thumb1} alt="" />
            </div>
          </div>
          <div className="detail_right">
            <h5 className="brand_product">Giày thể thao</h5>
            <h2 className="name_product">
              Balenciaga Triple S <br />
              Trainer Blue Green
            </h2>
            <p className="des">
              Fullbox Balen Triple S Trainer Yellow Green 2018. Dad Shoe. Đế
              giày tăng chiều cao. Phù hợp: nam nữ, đi học, đi làm, hoạt động
              thể thao. Size: 36-44. Chất liệu: Da. Giao hàng toàn quốc. Bảo
              hành 3 tháng. Đổi trả dễ dàng. Streetwear, trẻ trung năng động.{" "}
            </p>
            <div className="price">
              1,595,000₫
              <span>50%</span>
            </div>
            <div className="color">Màu</div>
            <div className="price_old">1,795,000₫</div>
            <div className="add_to_cart">
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
              <Button
                startIcon={<ShoppingCartOutlinedIcon sx={{ color: "#fff" }} />}
                size="large"
                sx={{
                  backgroundColor: "rgba(0, 126, 112, 1)",
                  color: "#000",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                Thêm vào giỏ hàng
              </Button>
            </div>
          </div>
        </div>
        <TitleComponent title="Có thể bạn sẽ thích" />
        <div className="list_one">
          <ListProduct />
        </div>
        <TitleComponent title="Sản phẩm tương tự" />
        <div className="list_two">
          <ListProduct isShowPanigation />
        </div>
        <div className="comment">
          <FormControl fullWidth sx={{ m: 1 }}>
            <TextField
              id="comment"
              label="Nhập bình luận ..."
              multiline
              rows={4}
              value={comment}
              onChange={handleCommentChange}
            />
          </FormControl>
          <Box sx={{ textAlign: "right", mt: 2 }}>
            <Button
              sx={{
                color: "#000",
                background: "rgba(0, 126, 112, 1)",
              }}
              onClick={handleCommentSubmit}
            >
              Gửi bình luận
            </Button>
          </Box>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
