import React from "react";
import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import pepperoniImg from "../../assets/images/pepperoni.png";
import cheeseImg from "../../assets/images/Cheese.png";
import margheritaImg from "../../assets/images/margherita.png";
import veggieImg from "../../assets/images/Veggie.png";
import StarIcon from "@mui/icons-material/Star";
import AttachMoneyTwoToneIcon from "@mui/icons-material/AttachMoneyTwoTone";

const BoxStyle = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexShrink: "1",
  flexBasis: "240px",
  boxShadow: "0px 1px 50px -20px rgba(0,0,0,1)",
  borderRadius: "50px",
  width: "24%",
  padding: "30px 70px 100px 70px",
  "&:hover": {
    boxShadow: "0px 1px 50px -20px rgba(231, 91, 30, 1)",
  },
}));

const AddBtn = styled(Button)(() => ({
  position: "absolute",
  bottom: "0",
  right: "0",
  borderRadius: "0 0 50px 0",
  background: "#e75b1e",
  padding: "3px 30px",
  fontSize: "45px",

  "&:hover": {
    background: "#983d16",
  },
}));

const pizzaData = [
  {
    name: "Pepperoni",
    image: pepperoniImg,
    description: "With pizza sauce, mozzarella cheese, and pepperoni.",
    price: "20",
    star: 5,
  },
  {
    name: "Cheese",
    image: cheeseImg,
    description: "With pizza sauce, mozzarella cheese, and pepperoni.",
    price: "16",
    star: 4.5,
  },
  {
    name: "Margherita",
    image: margheritaImg,
    description: "With pizza sauce, mozzarella cheese, and pepperoni.",
    price: "18",
    star: 4.2,
  },
  {
    name: "Veggie",
    image: veggieImg,
    description: "With pizza sauce, mozzarella cheese, and pepperoni.",
    price: "14",
    star: 4.8,
  },
];

/* <Typography variant="h6">{pizza.price}</Typography> */
export default function TopPizzaCard() {
  return (
    <>
      {pizzaData.map((pizza, index) => (
        <BoxStyle key={index}>
          <Typography
            fontSize={"25px"}
            letterSpacing={"2px"}
            fontWeight={"700"}
            color={"black"}
            fontFamily={"Italiana, serif"}
          >
            {pizza.name}
          </Typography>
          <img src={pizza.image} style={{ width: "auto", height: "200px" }} alt="Pizza" />
          <Box sx={{ position: "absolute", left: "15px", bottom: "10px" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <StarIcon sx={{ fill: "#e75b1e", fontSize: "35px" }} />
              <h1>{pizza.star}</h1>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AttachMoneyTwoToneIcon sx={{ fontSize: "30px" }} />
              <h1>{pizza.price}</h1>
            </Box>
          </Box>
          <AddBtn variant="contained" color="primary">
            +
          </AddBtn>
        </BoxStyle>
      ))}
    </>
  );
}
