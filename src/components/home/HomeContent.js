import React from "react";
import videoFile from "../../assets/video/pizzavideo.mp4";
import pizzaimg from "../../assets/images/pizza.png";
import "./homeContentStyle.css";
import { Button } from "@mui/material";

const HomeContent = () => {
  return (
    <div className="home">
      <video autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
      </video>
      <div className="content">
        <div className="mainContent">
          <div className="leftContent">
            <h2 style={{ fontSize: "90px", fontWeight: "800" }}>It`s not just Pizza, It`s an experience</h2>
            <Button>test</Button>
            <Button>test</Button>
          </div>

          <div className="RightContent">
            <img src={pizzaimg} alt="pizzaimg" style={{ width: "auto", height: "300px" }}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
