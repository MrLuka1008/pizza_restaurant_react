import React from "react";
import videoFile from "../../assets/video/pizzavideo.mp4";
import pizzaimg from "../../assets/images/pizza.png";
import "./homeContentStyle.css";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Box, Typography, useMediaQuery } from "@mui/material";
import HomeTopPizza from "./HomeTopPizza";
import WhoWeAre from "./WhoWeAre";
import Reviews from "./Reviews/Reviews";

const MainBtn = styled(Link)(() => ({
  textAlign: "center",
  color: "#fff",
  fontSize: "16px",
  background: "#e75b1e",
  padding: "20px",
  borderRadius: "30px",
  fontFamily: "poppins",
  minWidth: "150px",
  "&:hover": {
    background: "#af3b09",
  },
}));

const HomeContent = () => {
  const isMobile = useMediaQuery(`(max-width: 768px)`);
  const isLeptop = useMediaQuery(`(max-width: 1025px)`);
  return (
    <Box>
      {/* <div className="home">
        <video autoPlay loop muted style={{ display: isMobile ? "none" : "block" }}>
          <source src={videoFile} type="video/mp4" />
        </video>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#1f1f1fc3",
            position: "relative",
            zIndex: "1",
            padding: isMobile ? "0" : "50px 50px 0 50px",
            color: "#1f1f1f",
            width: "100%",
          }}
        > */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "#fff",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            background: "#ffffff",
            padding: "50px",
            display: "flex",
            margin: "auto",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "60%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h2
              style={{
                fontSize: isMobile ? "70px" : "90px",
                textAlign: "center",
                fontWeight: "800",
                marginBottom: "50px",
                fontFamily: "Poppins",
              }}
            >
              It`s not just Pizza, It`s an experience
            </h2>

            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <MainBtn to={"/menu"}>View Menu</MainBtn>
              <MainBtn to={"/BookingTable"}> Book A Table</MainBtn>
            </Box>
          </Box>
          <Box
            sx={{
              width: "70%",
              maxWidth: "800px",
              display: isLeptop ? "none" : "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={pizzaimg} alt="Tableimg" style={{ width: "100%", height: "auto" }} />
          </Box>
        </Box>
        <Typography style={{ marginBottom: "50px", textAlign: "center", fontSize: "40px", fontFamily: "Poppins" }}>
          Week Pizza
        </Typography>
      </div>
      {/* </div>
      </div> */}
      <HomeTopPizza />
      <WhoWeAre />
      <Reviews />
    </Box>
  );
};

export default HomeContent;
