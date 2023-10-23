import React from "react";
import Menu from "../Header/menu/Menu";
import Nav from "./Navbar/navbar";
import ListProduct from "../ListProduct/ListProduct";
import ListProductNew from "./ListProductNew/ListProductNew";
import Topic from "./Topic/Topic";
import TitleComponent from "./TitleComponent/TitleComponent";
import Header from "../Header/Header";
import AboutHome from "./AboutHome/AboutHome";
import ListProductNike from "./ListProductNike/ListProductNike";
import SubBanner from "./SubBanner/SubBanner";
import ListProductAdidas from "./ListProductAdidas/ListProductAdidas,";
import ListProductClothes from "./ListProductClothes/ListProductClothes";
import ListDanhmuc from "./ListDanhmuc/ListDanhmuc";
import Footer from "../Footer/Footer"
const Home = () => {
  return (
    <>
      <Header />
      <Nav />
      <AboutHome />
      <TitleComponent title="Sản Phẩm Mới" />
      <ListProductNew />
      <TitleComponent title="Giày Nike" />
      <ListProductNike />
      <SubBanner />
      <TitleComponent title="Giày Adidas" />
      <ListProductAdidas />
      <TitleComponent title="Áo quần thể thao" />
      <ListProductClothes />
      <TitleComponent title="Mua theo danh mục" />
      <ListDanhmuc />
      {/* <Topic /> */}
      {/* <ListProduct /> */}
      {/* <Topic isShowInverted /> */}
      {/* <ListProduct isShowPanigation /> */}
      <Footer />
    </>
  );
};

export default Home;
