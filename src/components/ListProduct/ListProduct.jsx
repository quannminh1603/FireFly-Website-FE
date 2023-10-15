import React from "react";
import ItemProduct from "../ItemProduct/ItemProduct";
import "./ListProduct.css";

import Pagination from "@mui/material/Pagination";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const ListProduct = ({ isShowPanigation }) => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div className="list_product">
      <div className="list_items">
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
      </div>
      {isShowPanigation && (
        <Stack spacing={2}>
          <Typography>Page: {page}</Typography>
          <Pagination count={10} page={page} onChange={handleChange} />
        </Stack>
      )}
    </div>
  );
};

export default ListProduct;
