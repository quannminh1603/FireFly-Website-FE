import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Menu.css";
import logo from "../../../assets/img/logo1.png";
import SearchIcon from "@mui/icons-material/Search";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { motion } from "framer-motion";
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
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  const [showMenu, setShowMenu] = useState(false);
  function handleClickShowMenu() {
    if (showMenu === false) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }
  const [showMenus, setShowMenus] = useState({});
  const toggleMenu = (menuId) => {
    // Đảo ngược trạng thái hiển thị menu con tương ứng với menuId
    setShowMenus({ ...showMenus, [menuId]: !showMenus[menuId] });
  };
  return (
    <div className="menu">
      <nav className="container desktop">
        <div className="select_nav_left">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="select_nav_mid">
          <ul className="select_menu">
            <li className="listGiay">
              <a href="/contact">Giày</a>
              <div className="menuc2">
                <div className="grid-3">
                  <div>
                    <ul>
                      <li>
                        <a style={{ fontWeight: "bold" }} href="/nikeproducts">
                          Nike
                        </a>
                      </li>
                      {/* <li><a href="#">Adidas</a></li>
                      <li><a href="#">MLB</a></li>
                      <li><a href="#">Asic</a></li>
                      <li><a href="#">Jordan</a></li>
                      <li><a href="#">Reebok</a></li> */}
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <a
                          style={{ fontWeight: "bold" }}
                          href="/adidasproducts"
                        >
                          Adidas
                        </a>
                      </li>
                      {/* <li><a href="#">Nike</a></li>
                      <li><a href="#">MLB</a></li>
                      <li><a href="#">Asic</a></li>
                      <li><a href="#">Jordan</a></li>
                      <li><a href="#">Reebok</a></li> */}
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <a style={{ fontWeight: "bold" }} href="/shoesproducts">
                          Giày leo núi
                        </a>
                      </li>
                      {/* <li><a href="#">Adidas</a></li>
                      <li><a href="#">MLB</a></li>
                      <li><a href="#">Asic</a></li>
                      <li><a href="#">Jordan</a></li>
                      <li><a href="#">Reebok</a></li> */}
                    </ul>
                  </div>
                  <div>
                    <img src={logo} alt="" />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="/clothesproducts">Quần áo</a>
            </li>
            <li>
              <a href="/">Môn thể thao</a>
            </li>
            <li>
              <a href="/detail?id=1">Thương hiệu</a>
            </li>
            <li>
              <a style={{ color: "red", fontWeight: "bold" }} href="/detail">
                SALE
              </a>
            </li>
            <li>
              <a style={{ marginLeft: "200px" }} href="/about">
                Về chúng tôi
              </a>
            </li>
          </ul>
        </div>
        <div className="select_nav_right">
          <div className="search">
            <SearchIcon
              style={{
                // position: "absolute",
                // top: "10px",
                // right: "10px",
                color: "#3C3C43",
                cursor: "pointer",
                backgroundColor: "#fff",
                fontSize: "1.4rem !important",
              }}
            />
            <input type="text" placeholder="Search" />
          </div>
          <a href="/cart">
            <ShoppingCartOutlinedIcon className="icon" />
          </a>
          <a href="/login">
            <PersonOutlineOutlinedIcon className="icon" />
          </a>
        </div>
      </nav>
      {/* Mobile */}
      <nav className="container mobile">
        <div className="select_nav_left_mobile">
          <div className=" nav_menu_open">
            <div className="iconNav">
              <DehazeIcon
                onClick={handleClickShowMenu}
                className="icon_mb"
                fontSize="20px"
              />
            </div>
            <a href="/">
              <img width="70%" src={logo} alt="" />
            </a>
          </div>
          {showMenu && (
            <div className=" nav_menu_close">
              <div className="nav_menu_close_top">
                <a href="/">
                  <img width="70%" src={logo} alt="" />
                </a>
                <CloseIcon fontSize="20px" onClick={handleClickShowMenu} />
              </div>
              <ul>
                <li className="flex">
                  <a href="/about">Về chúng tôi</a>
                  <KeyboardArrowDownIcon />
                </li>
                <li className="">
                  <div className="flex">
                    <a href="/">Thời trang nam</a>
                    <KeyboardArrowDownIcon
                      onClick={() => toggleMenu("menu1")}
                    />
                  </div>
                  {showMenus["menu1"] && (
                    <ul>
                      <li>
                        <a className="font_sm" href="/">
                          Giày
                        </a>
                      </li>
                      <li>
                        <a className="font_sm" href="/">
                          Quần áo
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <div className="flex">
                    <a href="/">Thời trang nữ</a>
                    <KeyboardArrowDownIcon
                      onClick={() => toggleMenu("menu2")}
                    />
                  </div>
                  {showMenus["menu2"] && (
                    <ul>
                      <li>
                        <a className="font_sm" href="/">
                          Giày
                        </a>
                      </li>
                      <li>
                        <a className="font_sm" href="/">
                          Quần áo
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="flex">
                  <a href="/detail">SALE</a>
                  <KeyboardArrowDownIcon />
                </li>
                <li className="flex">
                  <a href="/">Môn thể thao</a>
                  <KeyboardArrowDownIcon />
                </li>
                <li className="flex">
                  <a href="/detail?id=1">Thương hiệu</a>
                  <KeyboardArrowDownIcon />
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="select_nav_right_mobile">
          <div className="search_mobile">
            <SearchIcon className="icon_mb " fontSize="20px" />
          </div>
          <a href="/cart">
            <ShoppingCartOutlinedIcon className="icon_mb " fontSize="20px" />
          </a>
          <a href="/login">
            <PersonOutlineOutlinedIcon className="icon_mb " fontSize="20px" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
