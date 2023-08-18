import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Box, useMediaQuery } from "@mui/material";

const MyCarousel = (props) => {
  const isMobile = useMediaQuery(`(max-width: 768px)`);
  const API_URL = "http://localhost:3500/topPizza";
  const [topPizza, setTopPizza] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const listItems = await response.json();

        setTopPizza(listItems);
      } catch (err) {}
    };

    fetchItems();
  }, []);

  return (
    <Carousel animation="slide" interval={5000} duration={1000} navButtonsAlwaysVisible={true} indicators={false}>
      {topPizza.map((pizza, index) => (
        <Box
          key={index}
          sx={{
            width: "100%",

            margin: "auto",
            background: "red",
            display: "flex",
            alignItems: "center",
            maxHeight: "355px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img src={pizza.image} style={{ maxWidth: "100%", maxHeight: "100%" }} alt="Pizza" />
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
