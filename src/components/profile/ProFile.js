import React from "react";
import { Box, InputLabel, Typography } from "@mui/material";
import miniLogo from "../../assets/images/miniLogo.png";
import SubmitBtn from "../buttons/SubmitBtn";
import { ArrowDownward } from "@mui/icons-material";
import MyTextField from "./MyTextField";

const ProFile = ({ handleSubmit, formData, handleInputChange }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
        padding: "50px",
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          gap: "10px",
          width: "50%",
        }}
        onSubmit={handleSubmit}
      >
        <InputLabel>First Name</InputLabel>
        <MyTextField value={formData.name} handleInputChange={handleInputChange} name={"name"} />

        <InputLabel htmlFor="last-name">Last Name</InputLabel>
        <MyTextField value={formData.lastname} handleInputChange={handleInputChange} name={"lastname"} />

        <InputLabel htmlFor="email">Email</InputLabel>
        <MyTextField value={formData.gmail} handleInputChange={handleInputChange} name={"gmail"} disabled={true} />

        <InputLabel htmlFor="email">New password</InputLabel>
        <MyTextField value={formData.password} handleInputChange={handleInputChange} name={"password"} />
        <SubmitBtn text={"save and continue shopping"} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          width: "50%",
          background: "#e75b1e",
          borderRadius: " 16px",
          textAlign: "center",
        }}
      >
        <img style={{ width: "150px" }} alt="logo" src={miniLogo}></img>
        <Typography
          sx={{
            fontSize: "30px",
            color: "white",
            fontWeight: "700",
          }}
        >
          Please fill out your <br /> profile and addresses carefully <br />
          <ArrowDownward sx={{ fontSize: "30px" }} />
        </Typography>
      </Box>
    </Box>
  );
};

export default ProFile;
