import { Button } from "@mui/material";
import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import thumb from "../../assets/img/5ebe8a136e995c0302ab17cb-large1.png";
import thumb1 from "../../assets/img/thumb-816x460-098c9d745898e7dc65772d890b6d501c3.png";
import "./DetailProduct.css";
import TitleComponent from "../Home/TitleComponent/TitleComponent";
import ListProduct from "../ListProduct/ListProduct";
import { TextField, FormControl, Box } from "@mui/material";
import Header from "../Header/Header";
import DanhmucDetail from "./DanhmucDetail/DanhmucDetail";
import nikeDetail1a from "../../assets/img/nikeDetail1a.png"
import nikeDetail1b from "../../assets/img/nikeDetail1b.png"
import nikeDetail1c from "../../assets/img/nikeDetail1c.png"
import nikeDetail1d from "../../assets/img/nikeDetail1d.png"
import nikeDetail1e from "../../assets/img/nikeDetail1e.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPaperPlane, faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import ListProductNike from "../Home/ListProductNike/ListProductNike";
import Footer from "../Footer/Footer";
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
      <Header />
      <DanhmucDetail />
      <div className="page-detail">
        <p>
          <a href="">Trang chủ</a> <FontAwesomeIcon className="icon-right-page" icon={faChevronRight} style={{ color: "#000000", }} />
          <a href="">Nike</a> <FontAwesomeIcon className="icon-right-page" icon={faChevronRight} style={{ color: "#000000", }} />
          <a href="">Air Jordan 1 Retro Low Voodoo</a>
        </p>
      </div>
      <hr />
      <div className="detail_product">
        <div className="select_detail_product">
          <div className="detail_left">
            <div className="left_img">
              <div className="left_top_img">
                <div className="detail_img">
                  <img src={nikeDetail1a} alt="" />
                </div>
                <div className="detail_img">
                  <img src={nikeDetail1b} alt="" />
                </div>
              </div>
              <br />
              <div className="left_top_img">
                <div className="detail_img">
                  <img src={nikeDetail1c} alt="" />
                </div>
                <div className="detail_img">
                  <img src={nikeDetail1d} alt="" />
                </div>
              </div>
            </div>
            <br />
            <div className="detail_img_big">
              <img src={nikeDetail1e} alt="" />
            </div>
            {/* <div className="detail_img_small">
              <img src={thumb1} alt="" />
              <img src={thumb1} alt="" />
            </div> */}
          </div>
          <div className="detail_right">
            <h5 className="brand_product">Men’s shoes</h5>
            <h2 className="name_product">
              AIR JORDAN 1 RETRO LOW VOODOO
            </h2>
            <div className="price">
              4.790.000đ
              <span>50%</span>
            </div>
            <div className="price_old">1,795,000₫</div>
            <p className="des">
              New signature release for NBA player Zion Williamson, as he gets his first collaboration on a sneaker.
              <br />
              The Air Jordan 1 Retro Low OG Zion Williamson Voodoo features a highly intricate design with a voodoo doll-inspired theme
              <br /><a href="">Xem thêm...</a>
            </p>
            <hr />
            <div className="size">
              <ul>
                <li className="size_chan">35</li>
                <li>35.5</li>
                <li className="size_chan">36</li>
                <li>36.5</li>
                <li className="size_chan">37</li>
                <li>37.5</li>
                <li className="size_chan">38</li><br />
                <li>38.5</li>
                <li className="size_chan">39</li>
                <li>39.5</li>
                <li className="size_chan">40</li>
                <li>40.5</li>
                <li className="size_chan">41</li>
                <li className="size_chan">42</li><br />
                <li className="size_chan">43</li>
                <li className="size_chan">44</li>
                <li className="size_chan">45</li>
                <li className="size_chan">46</li>
              </ul>
            </div>
            <hr />
            <div className="add_to_cart">
              <div className="input_quantity">
                Số lượng:
                <button className="quantity_tru" onClick={decreaseValue}>-</button>
                <input
                  type="text"
                  value={quantity}
                  style={{ width: "50px", textAlign: "center", marginLeft: "12px" }}
                  readOnly
                />
                <button className="quantity_cong" onClick={increaseValue}>+</button>
              </div>
              <a className="detail_add_cart" href="/cart"><FontAwesomeIcon className="icon-heart" icon={faHeart} /> Mua ngay</a>
            </div>
          </div>
        </div>
        {/* <TitleComponent title="Có thể bạn sẽ thích" />
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
        </div> */}
      </div>
      <TitleComponent title="Có thể bạn sẽ thích" />
      <ListProductNike />
      <div className="comment">
        <input type="text" placeholder="Bình luận về sản phẩm..." />
        <FontAwesomeIcon className="icon-send-comment" icon={faPaperPlane} />
        <div className="user_comment">
          <p className="name">Guy Hawkins</p>
          <p className="content">Shop giao hàng siêu nhanh luôn, sản phẩm ok lắm nhe, sẽ tiếp tục ủng hộ shop nè ahihi!</p>
        </div>
        <div className="user_comment">
          <p className="name">Marvin McKinney</p>
          <p className="content">Giày đẹp, giao hàng nhanh</p>
        </div>
        <div className="user_comment">
          <p className="name">Brooklyn Simmons</p>
          <p className="content">5 sao cho shop nè ahihi</p>
        </div>
        <div className="user_comment">
          <p className="name">Brooklyn Simmons</p>
          <p className="content">Sẽ tiếp tục mua hàng ở shop vì, giao hàng nhanh nè, có kèm thư cảm ơn nữa.</p>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default DetailProduct;
