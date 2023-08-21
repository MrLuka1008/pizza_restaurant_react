import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { Avatar, Menu } from "@mui/material";
import MyMenuItem from "./MyMenuItem";

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

const CustomAvatar = styled(Avatar)(() => ({
  color: "#ffffff",
  background: "#e75b1e",
  width: "50px",
  height: "50px",
}));

const NavLoginIcon = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const checkUser = async () => {
      const API_URL = "http://localhost:3500/registerAccount";

      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        const user = data.find((account) => account.id === localStorage.getItem("user_id"));

        if (user) {
          setUserName(user.name);
        }
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    checkUser();
  }, []);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    handleClose();
    window.location.href = "/";
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: "1" }}>
      {localStorage.getItem("user_id") ? (
        <CustomAvatar onClick={handleAvatarClick}>{userName.charAt(0).toUpperCase()}</CustomAvatar>
      ) : (
        <Link to="/signin">
          <CustomButton>Sign in</CustomButton>
        </Link>
      )}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{ padding: "20px" }}
      >
        <Link to="/profile/userinfo">
          <MyMenuItem myFuntion={handleClose} text={"Profile"} />
        </Link>

        <Link>
          <MyMenuItem myFuntion={handleLogout} text={" Log Out"} />
        </Link>
      </Menu>
    </div>
  );
};

export default NavLoginIcon;
