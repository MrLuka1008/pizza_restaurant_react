import { MenuItem } from "@mui/material";
import React from "react";

const MyMenuItem = ({ myFuntion, text }) => {
  return (
    <MenuItem sx={{ padding: "20px 30px", color: "black" }} onClick={myFuntion}>
      {text}
    </MenuItem>
  );
};

export default MyMenuItem;
