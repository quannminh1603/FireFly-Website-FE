import React from "react";
import "./ListProductClothes.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import clothesHome1 from "../../../assets/img/clothesHome1.jpg"
import clothesHome2 from "../../../assets/img/clothesHome2.jpg"
import clothesHome3 from "../../../assets/img/clothesHome3.jpg"
import clothesHome4 from "../../../assets/img/clothesHome4.jpg"
import clothesHome5 from "../../../assets/img/clothesHome5.jpg"
import clothesHome6 from "../../../assets/img/clothesHome6.jpg"
import clothesHome7 from "../../../assets/img/clothesHome7.jpg"
import clothesHome8 from "../../../assets/img/clothesHome8.jpg"

const ListProductClothes = () => {
    return (
        <>
            <div className="list_product_clothes">
                <div className="list_items_new">
                    <article className="product_new">
                        <div className="slect_product_new">
                            <div className="product_img_new">
                                <img src={clothesHome1} alt="" />
                                {/* <FontAwesomeIcon icon="fas fa-cart-plus" style={{color: "#ffffff",}} /> */}
                                {/* <FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{color: "#ffffff",}} /> */}
                                <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                            <div className="product_name_new">
                                <p className="name_new">Áo Nike Dri-Fit One Luxe Women’s Tank Top FB5271-100</p>
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <div className="price_new">1.590.000đ</div>
                            </div>
                        </div>
                    </article>
                    <article className="product_new">
                        <div className="slect_product_new">
                            <div className="product_img_new">
                                <img src={clothesHome2} alt="" />
                                <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                            <div className="product_name_new">
                                <p className="name_new">Áo Nike Pro DRI-FIT Men’s Tight Short Sleeve Training Top DD1993-309</p>
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <div className="price_new">1.290.000đ</div>              <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                        </div>
                    </article>
                    <article className="product_new">
                        <div className="slect_product_new">
                            <div className="product_img_new">
                                <img src={clothesHome3} alt="" />
                                <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                            <div className="product_name_new">
                                <p className="name_new">Quần Tennis Nike Court Dri-Fit Slam DV4164-100</p>
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <div className="price_new">2.890.000đ</div>
                            </div>
                        </div>
                    </article>
                    <article className="product_new">
                        <div className="slect_product_new">
                            <div className="product_img_new">
                                <img src={clothesHome4} alt="" />
                                <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                            <div className="product_name_new">
                                <p className="name_new">Áo Jordan Men’s T-shirt ‘Cool Grey’ FN3716-065 </p>
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <div className="price_new">1.390.000đ</div>
                            </div>
                        </div>
                    </article>
                </div>
                <br />
                <div className="list_items_new">
                    <article className="product_new">
                        <div className="slect_product_new">
                            <div className="product_img_new">
                                <img src={clothesHome5} alt="" />
                                {/* <FontAwesomeIcon icon="fas fa-cart-plus" style={{color: "#ffffff",}} /> */}
                                {/* <FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{color: "#ffffff",}} /> */}
                                <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                            <div className="product_name_new">
                                <p className="name_new">Áo Nike Dri-Fit One Luxe Women’s Tank Top FB5271-100</p>
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <div className="price_new">1.590.000đ</div>
                            </div>
                        </div>
                    </article>
                    <article className="product_new">
                        <div className="slect_product_new">
                            <div className="product_img_new">
                                <img src={clothesHome6} alt="" />
                                <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                            <div className="product_name_new">
                                <p className="name_new">Áo Nike Pro DRI-FIT Men’s Tight Short Sleeve Training Top DD1993-309</p>
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <div className="price_new">1.290.000đ</div>              <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                        </div>
                    </article>
                    <article className="product_new">
                        <div className="slect_product_new">
                            <div className="product_img_new">
                                <img src={clothesHome7} alt="" />
                                <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                            <div className="product_name_new">
                                <p className="name_new">Quần Tennis Nike Court Dri-Fit Slam DV4164-100</p>
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <div className="price_new">2.890.000đ</div>
                            </div>
                        </div>
                    </article>
                    <article className="product_new">
                        <div className="slect_product_new">
                            <div className="product_img_new">
                                <img src={clothesHome8} alt="" />
                                <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                            <div className="product_name_new">
                                <p className="name_new">Áo Jordan Men’s T-shirt ‘Cool Grey’ FN3716-065 </p>
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <div className="price_new">1.390.000đ</div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
}

export default ListProductClothes;