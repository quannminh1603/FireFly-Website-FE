import React from "react";
import Menu from "../Header/menu/Menu";
import Nav from "./Navbar/navbar";
import ListProduct from "../ListProduct/ListProduct";
import ListProductNew from "./ListProductNew/ListProductNew";
import Topic from "./Topic/Topic";
import TitleComponent from "./TitleComponent/TitleComponent";
const Home = () => {
  return (
    <>
      <Nav />
      <TitleComponent title="Sản Phẩm Mới" />
      <ListProductNew />
      <TitleComponent title="Sản Phẩm Nổi Bật" />
      <ListProduct />
      <Topic />
      <ListProduct />
      <Topic isShowInverted />
      <ListProduct isShowPanigation />
    </>
  );
};

export default Home;
