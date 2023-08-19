import React from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import "./footer.css";
import { Box, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import styled from "@emotion/styled";
import { Mail, LocationOnOutlined, PhoneOutlined } from "@mui/icons-material";

const StyledIconButtone = styled(IconButton)(() => ({
  color: "#fff",
}));

const StyledDiv = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "#e75b1e",
  gap: "10px",
  fontSize: "20px",
  fontWeight: "600",
}));

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: "#1f1f1f",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "80%",
          margin: "auto",
          padding: "30px",
          justifyContent: "space-around",
          borderBottom: "2px solid #fff",
        }}
      >
        <Logo style={{ width: "200px", height: "100px" }} />

        <StyledDiv>
          <div style={{ display: "flex", alignItems: "center" }}>
            <LocationOnOutlined style={{ marginRight: "8px", color: "#fff" }} />
            <span>Location: Your Location</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <PhoneOutlined style={{ marginRight: "8px", color: "#fff" }} />
            <span>Phone: +123 456 789</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Mail style={{ marginRight: "8px", color: "#fff" }} />
            <span>Email: example@example.com</span>
          </div>
        </StyledDiv>
        <StyledDiv>
          <h2>SERVICES &#x1F4E6;</h2>
          <h2>RATE &#x2B50;</h2>
        </StyledDiv>
        <StyledDiv>
          <h2>SUPPORT &#x1F917;</h2>
          <h2>ABOUT US &#x1F481;</h2>
          <h2>CONTACT US &#x1F4E9;</h2>
        </StyledDiv>
      </div>

      <Box style={{ paddingTop: "30px" }}>
        <StyledIconButtone>
          <FacebookIcon />
        </StyledIconButtone>
        <StyledIconButtone>
          <InstagramIcon />
        </StyledIconButtone>
        <StyledIconButtone>
          <YouTubeIcon />
        </StyledIconButtone>
        <StyledIconButtone>
          <TwitterIcon />
        </StyledIconButtone>
      </Box>

      <Box sx={{ color: "#fff", padding: "30px" }}>&copy; {new Date().getFullYear()} LittleCaesars</Box>
    </div>
  );
};

export default Footer;
