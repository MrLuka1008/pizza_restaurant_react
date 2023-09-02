import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { setOrderAddress } from "../../redux";

const DeliveryComp = ({ userAddress }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const display = useDispatch();

  const handleButtonClick = (key) => {
    setSelectedValue(key);
    const address = userAddress[key];
    display(setOrderAddress(address));
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {Object.keys(userAddress).map((key) => {
        const address = userAddress[key];
        return (
          <Box
            key={key}
            sx={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Poppins",
              padding: "15px",
              width: "90%",
              gap: "5px",
              border: selectedValue === key ? "2px solid #e75b1e" : "2px solid #f1f1f1",
              color: "#1f1f1f",
              cursor: "pointer",
              position: "relative",
              "&:hover": {
                border: "2px solid #e75b1e",
                outline: "none",
              },
            }}
            onClick={() => handleButtonClick(key)}
          >
            <Typography
              sx={{
                marginBottom: "8px",
                fontWeight: "700",
                color: selectedValue === key ? "#e75b1e" : "#1f1f1f",
                borderBottom: selectedValue === key ? "2px solid #e75b1e" : "#2px solid #1f1f1f",
              }}
            >
              {address.addressname}
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>{address.streetaddress}</Typography>
            <Typography sx={{ fontSize: "14px" }}>{address.fullAddress}</Typography>
            <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
              <Typography sx={{ fontSize: "14px" }}>{address.city}</Typography>
              <Typography sx={{ fontSize: "16px" }}>{address.phone}</Typography>
            </Box>

            <Link style={{ fontFamily: "Poppins", fontSize: "14px", color: "black" }} to={"/profile/address"}>
              <EditIcon
                aria-label="Edit"
                sx={{
                  width: "17px",
                  height: "17px",
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  color: "#000",
                  "&:hover": {
                    color: "#fff",
                    borderRadius: "50%",
                    background: "#e75b1e",
                  },
                }}
              />
            </Link>
          </Box>
        );
      })}
    </Box>
  );
};

export default DeliveryComp;
