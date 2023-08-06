import React from "react";
import videoFile from "../../assets/video/pizzavideo.mp4";
import pizzaimg from "../../assets/images/pizza.png";
import "./homeContentStyle.css";
import styled from "@emotion/styled";
import TopPizzaCard from "../cards/TopPizzaCard";
import { Link } from "react-router-dom";
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
  return (
    <div className="home">
      <video autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
      </video>
      <div className="content">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "white",
            padding: "50px",
            alignItems: "center",
          }}
        >
          <div className="mainContent">
            <div className="leftContent">
              <h2 style={{ fontSize: "90px", fontWeight: "800", marginBottom: "50px" }}>
                It`s not just Pizza, It`s an experience
              </h2>
              <MainBtn to={"/menu"}>View Menu</MainBtn>
              <MainBtn to={"/BookingTable"}> Book A Table</MainBtn>
            </div>

            <div className="RightContent">
              <img src={pizzaimg} alt="pizzaimg" style={{ width: "auto", height: "300px" }}></img>
            </div>
          </div>

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
