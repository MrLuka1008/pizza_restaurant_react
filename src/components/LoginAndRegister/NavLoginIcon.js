import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { Avatar, Menu, MenuItem } from "@mui/material";
import apiRequest from "../../api/apiRequest";

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
  const [anchorEl, setAnchorEl] = useState(null);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const checkUser = async () => {
      // if (localStorage.getItem("user_id")) {
      //   const API_URL = "http://localhost:3500/registerAccount";
      //   console.log("User is logged in");

      //   const postOptions = {
      //     method: "GET",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   };

      //   try {
      //     const userResponse = await apiRequest(API_URL, postOptions);
      //     console.log(userResponse);
      //     const user = userResponse.find((account) => account.id === localStorage.getItem("user_id"));
      //     if (user) {
      //       setUserName(user.name);
      //     }
      //   } catch (error) {
      //     console.log("Error fetching user data:", error);
      //   }
      // }

      const API_URL = "http://localhost:3500/registerAccount";

      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        console.log("Response data:", data);

        const user = data.find((account) => account.id === localStorage.getItem("user_id"));
        console.log("User:", user);
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
    // Perform logout actions
    // Remove user ID from local storage, etc.
    localStorage.removeItem("user_id");
    handleClose();
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: "1" }}>
      {localStorage.getItem("user_id") ? (
        <Avatar onClick={handleAvatarClick}>{userName.charAt(0)}</Avatar>
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
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Log Out</MenuItem>
      </Menu>
    </div>
  );
};

export default NavLoginIcon;
