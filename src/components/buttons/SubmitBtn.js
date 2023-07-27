import { Button } from "@mui/material";
import React from "react";

const SubmitBtn = ({ text }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      sx={{
        fontSize: "16px",
        padding: "15px 15px",
        background: "#e75b1e",
        color: "white",
        "&:hover": {
          color: "#e75b1e",
          boxShadow: "0px 2px 0px #e75b1e",
          background: "white",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default SubmitBtn;
