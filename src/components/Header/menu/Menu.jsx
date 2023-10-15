import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Menu.css";
import logo from "../../../assets/img/logo1.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import {
  faBars,
  faCartShopping,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Menu = () => {
  const goToCategory = () => {
    window.location.href = "/category"; // Thay đổi địa chỉ URL đến /category
  };
  return (
    <div className="menu">
      <nav className="container">
        <div className="select_nav_left">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="select_nav_mid">
          <ul className="select_menu">
            <li>
              <a href="/">Trang chủ</a>
            </li>
            <li>
              <a href="/category">Bộ sưu tập</a>
            </li>
            <li>
              <a href="/contact">Cửa hàng</a>
            </li>
            <li>
              <a href="/detail">Quần áo & phụ kiện</a>
            </li>
          </ul>
        </div>
        <div className="select_nav_right">
          <div className="search">
            <SearchIcon
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                color: "#3C3C43",
                cursor: "pointer",
              }}
            />
            <input type="text" placeholder="Search" />
          </div>
          <a href="/cart">
            <ShoppingCartOutlinedIcon className="icon" />
          </a>
          <a href="/">
            <FavoriteBorderIcon className="icon" />
          </a>
          <a href="/login">
            <PersonOutlineOutlinedIcon className="icon" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
