import React from "react";
import videoFile from "../../assets/video/pizzavideo.mp4";
import pizzaimg from "../../assets/images/pizza.png";
import "./homeContentStyle.css";
import styled from "@emotion/styled";
import TopPizzaCard from "../cards/TopPizzaCard";
import { Link } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
// import { Box } from "@mui/material";
// import { Padding } from "@mui/icons-material";

const MainBtn = styled(Link)(() => ({
  color: "#fff",
  fontSize: "20px",
  background: "#e75b1e",
  padding: "20px 30px",
  borderRadius: "30px",
  fontFamily: "poppins",
  marginLeft: "50px",
  "&:hover": {
    background: "#af3b09",
  },
}));

const HomeContent = () => {
  const isMobile = useMediaQuery(`(max-width: 768px)`);
  const isLeptop = useMediaQuery(`(max-width: 1025px)`);
  return (
    <div className="home">
      <video autoPlay loop muted style={{ display: isMobile ? "none" : "block" }}>
        <source src={videoFile} type="video/mp4" />
      </video>
      <div
        // className="content"
        style={{
          display: "flex",
          flexDirection: "column",
          background: "#1f1f1fc3",
          width: "100%",
          position: "relative",
          zIndex: "1",
          padding: isMobile ? "0" : "50px",
          color: "#1f1f1f",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "white",
            padding: "50px",
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
            <Box sx={{ width: "60%" }}>
              <h2
                style={{
                  fontSize: isMobile ? "70px" : "90px",
                  // fontSize: "90px",
                  textAlign: "center",
                  fontWeight: "800",
                  marginBottom: "50px",
                }}
              >
                It`s not just Pizza, It`s an experience
              </h2>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <MainBtn to={"/menu"}>View Menu</MainBtn>
                <MainBtn to={"/BookingTable"}> Book A Table</MainBtn>
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                maxWidth: "900px",
                display: isLeptop ? "none" : "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={pizzaimg} alt="Tableimg" style={{ width: "100%", height: "auto" }} />
            </Box>
          </Box>

          <h1 style={{ margin: "30px auto" }}>Week Pizza</h1>
          <div
            className="topPizzaCards"
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "10px" }}
          >
            <TopPizzaCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
