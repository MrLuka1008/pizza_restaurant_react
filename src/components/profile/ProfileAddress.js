import React, { useEffect, useState } from "react";
import { Box, TextField, FormControl, InputLabel, Select, MenuItem, Alert, Typography } from "@mui/material";
import AddressComponent from "./AddressComponent";
import SubmitBtn from "../buttons/SubmitBtn";

const ProfileAddress = ({ formData }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const API_URL = "http://localhost:3500/registerAccount";

  const [address, setAddress] = useState({ city: "", fullAddress: "", phone: "" });
  const userId = localStorage.getItem("user_id");

  const [userAddressLength, setUserAddressLength] = useState(0);

  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");

  const [addressList, setAddressList] = useState([]);

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);

    // const shippingPrices = {
    //   tbilisi: 5,
    //   kutaisi: 8,
    //   batumi: 10,
    //   rustavi: 6,
    //   gori: 7,
    //   zugdidi: 9,
    //   poti: 10,
    //   khashuri: 7,
    //   telavi: 6,
    // };

    setAddress((prevAddress) => ({
      ...prevAddress,
      city: country,
    }));

    // setShippingPrice(shippingPrices[country] || 0); // Set the shipping price for the selected country
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch the existing user data from the server
      const response = await fetch(`${API_URL}/${userId}`);
      if (!response.ok) {
        console.log("Failed to fetch user data. Status:", response.status);
        return;
      }

      const userData = await response.json();
      setUserAddressLength(Object.keys(userData.address).length);

      if (Object.keys(userData.address).length < 4) {
        const newAddressKey = Object.keys(userData.address).length + 1;
        userData.address[newAddressKey] = address;

        setAddressList((prevAddressList) => [...prevAddressList, address]);

        const patchOptions = {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        };

        const patchResponse = await fetch(`${API_URL}/${userId}`, patchOptions);

        if (patchResponse.ok) {
          console.log("Data updated successfully!");
          showAlert("Address added successfully!", "success");
        } else {
          console.log("Failed to update data. Status:", patchResponse.status);
        }
      } else {
        console.log("You already have four addresses. Cannot add a new address.");
        showAlert("You already have four addresses. Cannot add a new address.", "error");
      }
    } catch (error) {
      console.log("Error updating data:", error);
    }

    setAddress({ city: "", fullAddress: "", phone: "" });
  };
  console.log("userAddressLength", userAddressLength);

  const showAlert = (message, severity) => {
    setAlertMessage(message);
    setAlertSeverity(severity);
    setTimeout(() => {
      setAlertMessage("");
    }, 3000);
  };

  useEffect(() => {
    // Fetch the user data from the server and set the address list
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${API_URL}/${userId}`);
        if (!response.ok) {
          console.log("Failed to fetch user data. Status:", response.status);
          return;
        }

        const userData = await response.json();

        setAddressList(Object.values(userData.address));
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const deleteAddress = () => {
    console.log("delete");
  };

  const editAddress = () => {
    console.log("editAddress");
  };
  // const addressArray = Object.entries(formData.address).map(([key, value]) => ({ [key]: value }));

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        justifyContent: "space-around",
        borderRadius: " 0px 0px 16px 16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        width: "80%",
        padding: "100px",
      }}
      onSubmit={handleSubmit}
    >
      <Box
        sx={{
          display: "flex",
          width: "70%",
          flexWrap: "wrap",
        }}
      >
        {addressList.map((addressItem, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              borderBottom: "1px solid black",
              flexWrap: "wrap",
              width: "50%",
            }}
          >
            <Box>
              <Typography>Address {index + 1}:</Typography>
              <AddressComponent deleteAddress={deleteAddress} address={addressItem} editAddress={editAddress} />
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "30%" }}>
        <FormControl sx={{ minWidth: 225 }}>
          <InputLabel htmlFor="country-select">Select City</InputLabel>
          <Select
            value={selectedCountry}
            onChange={handleCountryChange}
            name="city"
            label="Select City"
            inputProps={{
              name: "country",
              id: "country-select",
            }}
          >
            <MenuItem value="tbilisi">tbilisi</MenuItem>
            <MenuItem value="kutaisi">kutaisi</MenuItem>
            <MenuItem value="batumi">batumi</MenuItem>
            <MenuItem value="rustavi">rustavi</MenuItem>
            <MenuItem value="gori">gori</MenuItem>
            <MenuItem value="zugdidi">zugdidi</MenuItem>
            <MenuItem value="poti">poti</MenuItem>
            <MenuItem value="khashuri">khashuri</MenuItem>
            <MenuItem value="telavi">telavi</MenuItem>
          </Select>
        </FormControl>
        <InputLabel htmlFor="address">Full Address</InputLabel>
        <TextField
          id="address"
          name="fullAddress"
          variant="outlined"
          value={address.fullAddress}
          onChange={handleInputChange}
          required
        />
        <InputLabel htmlFor="Phone">Phone</InputLabel>
        <TextField
          id="Phone"
          name="phone"
          variant="outlined"
          value={address.phone}
          onChange={handleInputChange}
          required
        />

        <SubmitBtn text={"Add new address"} />
        {alertMessage && (
          <Alert severity={alertSeverity} sx={{ fontSize: "12px" }}>
            {alertMessage}
          </Alert>
        )}
      </Box>
    </Box>
  );
};

export default ProfileAddress;
