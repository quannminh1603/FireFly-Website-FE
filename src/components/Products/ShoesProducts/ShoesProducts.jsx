import React from "react";
import "./ShoesProducts.css";
import DanhmucDetail from "../../DetailProduct/DanhmucDetail/DanhmucDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight, faCartPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import adidasHome1 from "../../../assets/img/adidasHome1.jpg"
import adidasHome2 from "../../../assets/img/adidasHome2.jpg"
import adidasHome3 from "../../../assets/img/adidasHome3.jpg"
import adidasHome4 from "../../../assets/img/adidasHome4.jpg"
import adidasHome5 from "../../../assets/img/adidasHome5.jpg"
import adidasHome6 from "../../../assets/img/adidasHome6.jpg"
import adidasHome7 from "../../../assets/img/adidasHome7.jpg"
import adidasHome8 from "../../../assets/img/adidasHome8.jpg"
import TitleComponent from "../../Home/TitleComponent/TitleComponent";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

import Pagination from "@mui/material/Pagination";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const ShoesProducts = () => {
    return (
        <>
            <Header />
            <DanhmucDetail />
            <div className="page-detail">
                <p>
                    <a href="">Trang chủ</a> <FontAwesomeIcon className="icon-right-page" icon={faChevronRight} style={{color: "#000000",}} /> 
                    {/* <a href="">Nike</a> <FontAwesomeIcon className="icon-right-page" icon={faChevronRight} style={{color: "#000000",}} />  */}
                    <a href="">Giày leo núi</a>
                </p>
            </div>
            <hr />
            <TitleComponent title="Giày Leo Núi"/>
            <p className="soluong_products">16 sản phẩm</p>
            <div className="shoes_products_page">
                <div className="list_items_new">
                    <article className="product_new">
                        <div className="slect_product_new">
                            <div className="product_img_new">
                                <img src={adidasHome1} alt="" />
                                {/* <FontAwesomeIcon icon="fas fa-cart-plus" style={{color: "#ffffff",}} /> */}
                                {/* <FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{color: "#ffffff",}} /> */}
                                <a href="/detail"><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                            <div className="product_name_new">
                                <p className="name_new">Giày Adidas Rivalry Low TR ‘All-Star – Silver Dawn’ IE1665</p>
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <div className="price_new">2.790.000đ</div>
                            </div>
                        </div>
                    </article>
                    <article className="product_new">
                        <div className="slect_product_new">
                            <div className="product_img_new">
                                <img src={adidasHome2} alt="" />
                                <a href="/detail"><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                            <div className="product_name_new">
                                <p className="name_new">Giày Adidas AlphaBoost V1 ‘Triple White’ HP2759 </p>
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <div className="price_new">3.790.000đ</div>              <a href="/detail"><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                        </div>
                    </article>
                    <article className="product_new">
                        <div className="slect_product_new">
                            <div className="product_img_new">
                                <img src={adidasHome3} alt="" />
                                <a href="/detail"><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                            <div className="product_name_new">
                                <p className="name_new">Giày Adidas Ultraboot light ‘Non Dyed’ HQ6338</p>
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <div className="price_new">5.490.000đ</div>
                            </div>
                        </div>
                    </article>
                    <article className="product_new">
                        <div className="slect_product_new">
                            <div className="product_img_new">
                                <img src={adidasHome4} alt="" />
                                <a href="/detail"><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                            <div className="product_name_new">
                                <p className="name_new">Giày Adidas Superstar 82 ‘White Dark Green’ GW6011</p>
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <div className="price_new">3.490.000đ</div>
                            </div>
                        </div>
                    </article>
                </div>
                <br />
                <div className="list_items_new">
                    <article className="product_new">
                        <div className="slect_product_new">
                            <div className="product_img_new">
                                <img src={adidasHome5} alt="" />
                                {/* <FontAwesomeIcon icon="fas fa-cart-plus" style={{color: "#ffffff",}} /> */}
                                {/* <FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{color: "#ffffff",}} /> */}
                                <a href="/detail"><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                            <div className="product_name_new">
                                <p className="name_new">Giày Adidas Originals Stan Smith ‘Cloud White’ ID1974</p>
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <div className="price_new">2.590.000đ</div>
                            </div>
                        </div>
                    </article>
                    <article className="product_new">
                        <div className="slect_product_new">
                            <div className="product_img_new">
                                <img src={adidasHome6} alt="" />
                                <a href="/detail"><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                            <div className="product_name_new">
                                <p className="name_new">Giày Adidas Stan Smith ‘White Red’ ID1979</p>
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <div className="price_new">2.790.000đ</div>              <a href="/detail"><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                        </div>
                    </article>
                    <article className="product_new">
                        <div className="slect_product_new">
                            <div className="product_img_new">
                                <img src={adidasHome7} alt="" />
                                <a href="/detail"><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                            <div className="product_name_new">
                                <p className="name_new">Giày adidas Forum Mid ‘Triple White’ FY4975</p>
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <div className="price_new">2.290.000đ</div>
                            </div>
                        </div>
                    </article>
                    <article className="product_new">
                        <div className="slect_product_new">
                            <div className="product_img_new">
                                <img src={adidasHome8} alt="" />
                                <a href="/detail"><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                            <div className="product_name_new">
                                <p className="name_new">Giày Adidas Originals Superstar PRIDE RM Shoes ‘Pride’ ID7493</p>
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <div className="price_new">2.790.000đ</div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ShoesProducts;