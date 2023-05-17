import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const CustomButton = styled(Button)(({ theme }) => ({
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
      <CustomButton>Login in</CustomButton>
      <CustomButton>Register</CustomButton>
    </div>
  );
};

export default NavLoginIcon;
