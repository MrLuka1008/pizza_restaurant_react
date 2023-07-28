import React from "react";
import { Box, TextField, InputLabel, Typography } from "@mui/material";
import miniLogo from "../../assets/images/miniLogo.png";
import SubmitBtn from "../buttons/SubmitBtn";
import { ArrowDownward } from "@mui/icons-material";

const ProFile = ({ handleSubmit, formData, handleInputChange }) => {
  return (
    <Box
      sx={{
        display: "flex",
        // alignItems: "center",
        justifyContent: "space-around",
        // background: "rgba(255, 255, 255, 0.6)",
        borderRadius: " 16px",
        borderRadius: "16px 16px 0px 0px ",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        width: "80%",
        // background: "blue",
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          gap: "20px",
          padding: "50px",
          width: "50%",
        }}
        onSubmit={handleSubmit}
      >
        <InputLabel>First Name</InputLabel>
        <TextField
          id="first-name"
          type="text"
          name="name"
          variant="outlined"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <InputLabel htmlFor="last-name">Last Name</InputLabel>
        <TextField
          id="last-name"
          type="text"
          name="lastname"
          variant="outlined"
          value={formData.lastname}
          onChange={handleInputChange}
          required
        />
        <InputLabel htmlFor="email">Email</InputLabel>
        <TextField
          id="email"
          variant="outlined"
          type="email"
          name="gmail"
          value={formData.gmail}
          onChange={handleInputChange}
          disabled
          required
        />
        <InputLabel htmlFor="email">New password</InputLabel>
        <TextField
          id="password"
          variant="outlined"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
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
        <img style={{ width: "200px" }} alt="logo" src={miniLogo}></img>
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
