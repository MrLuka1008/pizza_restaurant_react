import React from "react";
import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import pepperoniImg from "../../assets/images/pepperoni.png";
import cheeseImg from "../../assets/images/Cheese.png";
import margheritaImg from "../../assets/images/margherita.png";
import veggieImg from "../../assets/images/Veggie.png";

const BoxStyle = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexShrink: "1",
  flexBasis: "240px",
  boxShadow: "0px 1px 50px -20px rgba(0,0,0,1)",
  borderRadius: "40px",
  width: "24%",
  padding: "50px",
  "&:hover": {
    boxShadow: "0px 1px 50px -20px rgba(231, 91, 30, 1)",
  },
}));

const AddBtn = styled(Button)(() => ({
  position: "absolute",
  bottom: "0",
  right: "0",
  borderRadius: "0 0  40px 0",
  background: "#e75b1e",
  padding: "3px 40px",
  fontSize: "50px",
}));

const pizzaData = [
  {
    name: "Pepperoni",
    image: pepperoniImg,
    description: "With pizza sauce, mozzarella cheese, and pepperoni.",
    price: "$20",
  },
  {
    name: "Cheese",
    image: cheeseImg,
    description: "With pizza sauce, mozzarella cheese, and pepperoni.",
    price: "$16",
  },
  {
    name: "margherita",
    image: margheritaImg,
    description: "With pizza sauce, mozzarella cheese, and pepperoni.",
    price: "$18",
  },
  {
    name: "Cheese",
    image: veggieImg,
    description: "With pizza sauce, mozzarella cheese, and pepperoni.",
    price: "$14",
  },
];

export default function TopPizzaCard() {
  return (
    <>
      {pizzaData.map((pizza, index) => (
        <BoxStyle key={index}>
          <Typography fontSize={"25px"} fontWeight={"700"} color={"black"} fontFamily={"Italiana, serif"}>
            {pizza.name}
          </Typography>
          <img src={pizza.image} style={{ width: "auto", height: "200px" }} alt="Pizza" />
          <Typography variant="subtitle1">{pizza.description}</Typography>
          <Typography variant="h6">{pizza.price}</Typography>
          <AddBtn variant="contained" color="primary">
            +
          </AddBtn>
        </BoxStyle>
      ))}
    </>
  );
}
