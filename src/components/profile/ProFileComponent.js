import React from "react";
import { Box, Typography } from "@mui/material";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import ProfileAddress from "./address/ProfileAddress";
import UserInfo from "./profileInfo/UserInfo";

const ProFileComponent = () => {
  const activeLinkStyles = {
    borderBottom: "2px solid #e75b1e",
  };

  const location = useLocation();

  let links = [
    { path: "/profile/userinfo", name: "Personal info" },
    { path: "/profile/address", name: "Address" },
  ];

  return (
    <Box
      sx={{
        width: "80%",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          fontSize: "18px",
          color: "black",
          display: "flex",
          gap: "50px",
          marginTop: "50px",
        }}
      >
        {links.map((link) => (
          <li key={link.path} style={{ marginLeft: "20px", ...(location.pathname === link.path && activeLinkStyles) }}>
            <Link
              to={link.path}
              style={{
                color: "black",
                fontSize: "22px",
                letterSpacing: "2px",
                fontWeight: "800",
              }}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </Box>
      <Routes>
        <Route path="userinfo" element={<UserInfo />} />
        <Route path="address" element={<ProfileAddress />} />
      </Routes>
    </Box>
  );
};

export default ProFileComponent;
