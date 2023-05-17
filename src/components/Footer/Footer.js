import React from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Footer = () => {
  return (
    <div
      style={{
        background: "#1f1f1f",
        height: "18vh",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Logo style={{ width: "200px", height: "100px" }} />
    </div>
  );
};

export default Footer;
