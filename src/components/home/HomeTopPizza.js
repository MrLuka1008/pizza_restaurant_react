import { Box, Typography } from "@mui/material";
import React from "react";
import MyCarousel from "./MyCarousel";

const HomeTopPizza = () => {
  return (
    <Box sx={{ display: "flex", width: "100%", flexDirection: "column", background: "white" }}>
      <MyCarousel />
    </Box>
  );
};

export default HomeTopPizza;
