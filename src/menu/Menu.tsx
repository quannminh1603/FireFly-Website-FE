import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Menu.css"
import {
  faBars,
  faCartShopping,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const Menu = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-xl">
          <a className="navbar-brand" href="#">
            <img src="" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Trang chủ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Bộ sưu tập
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Cửa hàng
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Quần áo & Phụ kiện
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <div className="icon__nav">
              <FontAwesomeIcon className="icon__nav__1" icon={faCartShopping} />
              <FontAwesomeIcon className="icon__nav__1" icon={faHeart} />
              <FontAwesomeIcon className="icon__nav__1" icon={faUser} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
