import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button, ButtonGroup, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./CategoryProduct.css";
import ListProduct from "../ListProduct/ListProduct";
function valuetext(value) {
  return `${value} VNĐ`;
}
const CategoryProduct = () => {
  const [value, setValue] = React.useState([1000000, 5000000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="category_product">
      <div className="containers">
        <div className="category_left">
          <div className="brand">
            <Typography sx={{ fontSize: "20px" }} variant="h6">
              NHÃN HÀNG
            </Typography>
            <FormGroup sx={{ ml: "30px" }}>
              <FormControlLabel
                control={<Checkbox size="small" defaultChecked />}
                label="Nike"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Jordan"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Adidas"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Fila"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Gucci"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Balenciaga "
              />
            </FormGroup>
          </div>
          <hr />
          <div className="price">
            <Typography sx={{ fontSize: "20px" }} variant="h6">
              GIÁ TIỀN
            </Typography>
            <Box sx={{ width: 300, padding: "12px" }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={500000}
                max={10000000}
              />
            </Box>
          </div>
          <hr />
          <div className="size">
            <Typography sx={{ fontSize: "20px" }} variant="h6">
              KÍCH THƯỚT
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <Button variant="outlined">32</Button>
              <Button variant="outlined">33</Button>
              <Button variant="outlined">34</Button>
              <Button variant="outlined">35</Button>
              <Button variant="outlined">36</Button>
              <Button variant="outlined">37</Button>
              <Button variant="outlined">38</Button>
              <Button variant="outlined">39</Button>
              <Button variant="outlined">40</Button>
              <Button variant="outlined">41</Button>
              <Button variant="outlined">42</Button>
              <Button variant="outlined">43</Button>
              <Button variant="outlined">44</Button>
              <Button variant="outlined">45</Button>
              <Button variant="outlined">46</Button>
            </Box>
          </div>
        </div>
        <div className="category_right">
          <Typography sx={{ fontSize: "20px" }} variant="h6">
            Giày Nike
          </Typography>
          <ListProduct isShowPanigation />
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
