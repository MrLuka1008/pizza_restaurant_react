import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const CustomButton = styled(Button)(() => ({
  color: "#ffffff",
  background: "#e75b1e",
  marginLeft: "10px",
  fontSize: "14px",
  "&:hover": {
    boxShadow: "0px 2px 0px #e75b1e",
    color: "#ffffff",
  },
}));

const NavLoginIcon = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: "1" }}>
      <Link to="/signin">
        <CustomButton>Sign in</CustomButton>
      </Link>
    </div>
  );
};

export default NavLoginIcon;
