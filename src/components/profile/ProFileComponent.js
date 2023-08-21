import React from "react";
import { Box } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import ProfileAddress from "./address/ProfileAddress";
import UserInfo from "./profileInfo/UserInfo";

const ProFileComponent = () => {
  return (
    <Box>
      <Link to="/profile/userinfo">Personal info</Link>
      <Link to="/profile/address">Address</Link>

      <Routes>
        <Route path="userinfo" element={<UserInfo />} />
        <Route path="address" element={<ProfileAddress />} />
      </Routes>
    </Box>
  );
};

export default ProFileComponent;
