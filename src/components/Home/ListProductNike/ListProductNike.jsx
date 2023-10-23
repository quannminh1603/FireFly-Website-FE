import React from "react";
import "./ListProductNike.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import nikehome1 from "../../../assets/img/nikehome1.jpg"
import nikehome2 from "../../../assets/img/nikehome2.jpg"
import nikehome3 from "../../../assets/img/nikehome3.jpg"
import nikehome4 from "../../../assets/img/nikehome4.jpg"
import nikehome5 from "../../../assets/img/nikehome5.jpg"
import nikehome6 from "../../../assets/img/nikehome6.jpg"
import nikehome7 from "../../../assets/img/nikehome7.jpg"
import nikehome8 from "../../../assets/img/nikehome8.jpg"
// import ListProductNew from "../ListProductNew/ListProductNew";

const ListProductNike = () => {
    return (
        <>
            <div className="list_product_nike">
                <div className="list_items_new">
                    <article className="product_new">
                        <div className="slect_product_new">
                            <div className="product_img_new">
                                <img src={nikehome1} alt="" />
                                {/* <FontAwesomeIcon icon="fas fa-cart-plus" style={{color: "#ffffff",}} /> */}
                                {/* <FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{color: "#ffffff",}} /> */}
                                <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                            <div className="product_name_new">
                                <p className="name_new">Giày Air Jordan 1 Low ‘White Industrial Blue Siren Red’ FV3622-141</p>
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <div className="price_new">5.900.000đ</div>
                            </div>
                        </div>
                    </article>
                    <article className="product_new">
                        <div className="slect_product_new">
                            <div className="product_img_new">
                                <img src={nikehome2} alt="" />
                                <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                            <div className="product_name_new">
                                <p className="name_new">Giày Nike Air Force 1 Low Classics ’50 Years Of Hip-Hop’ DV7183-100</p>
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <div className="price_new">3.990.000đ</div>              <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                        </div>
                    </article>
                    <article className="product_new">
                        <div className="slect_product_new">
                            <div className="product_img_new">
                                <img src={nikehome3} alt="" />
                                <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                            <div className="product_name_new">
                                <p className="name_new">Giày nam Air Jordan 1 Low ‘Smoke Grey V3’ 553558-040</p>
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <div className="price_new">4.890.000đ</div>
                            </div>
                        </div>
                    </article>
                    <article className="product_new">
                        <div className="slect_product_new">
                            <div className="product_img_new">
                                <img src={nikehome4} alt="" />
                                <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                            <div className="product_name_new">
                                <p className="name_new">Giày nam Air Jordan 1 Low ‘Light Smoke Grey V2’ 553558-030</p>
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <div className="price_new">4.290.000đ</div>
                            </div>
                        </div>
                    </article>
                </div>
                <br />
                <div className="list_items_new">
                    <article className="product_new">
                        <div className="slect_product_new">
                            <div className="product_img_new">
                                <img src={nikehome5} alt="" />
                                {/* <FontAwesomeIcon icon="fas fa-cart-plus" style={{color: "#ffffff",}} /> */}
                                {/* <FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{color: "#ffffff",}} /> */}
                                <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                            <div className="product_name_new">
                                <p className="name_new">Giày Nike Air Force 1 Low Triple White 315122-111 / CW2288-111 / DD8959-100</p>
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <div className="price_new">2.279.000đ</div>
                            </div>
                        </div>
                    </article>
                    <article className="product_new">
                        <div className="slect_product_new">
                            <div className="product_img_new">
                                <img src={nikehome6} alt="" />
                                <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                            <div className="product_name_new">
                                <p className="name_new">Giày Air Jordan 1 High Zoom Comfort 2 ‘Particle Grey’ DV1307-101</p>
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <div className="price_new">5.690.000đ</div>              <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                        </div>
                    </article>
                    <article className="product_new">
                        <div className="slect_product_new">
                            <div className="product_img_new">
                                <img src={nikehome7} alt="" />
                                <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                            <div className="product_name_new">
                                <p className="name_new">Giày Air Jordan 1 Mid SE ‘Black Sky J Mauve’ FB9911-008</p>
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <div className="price_new">5.290.000đ</div>
                            </div>
                        </div>
                    </article>
                    <article className="product_new">
                        <div className="slect_product_new">
                            <div className="product_img_new">
                                <img src={nikehome8} alt="" />
                                <a><FontAwesomeIcon className="cartIcon" icon={faCartPlus} style={{ color: "#fff", }} /></a>
                            </div>
                            <div className="product_name_new">
                                <p className="name_new">Giày Air Jordan 1 Mid ‘Sanded Purple’ 554724-445</p>
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <FontAwesomeIcon icon={faStar} className="starIcon" style={{ color: "#fbff00", }} />
                                <div className="price_new">5.290.000đ</div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
}

export default ListProductNike;