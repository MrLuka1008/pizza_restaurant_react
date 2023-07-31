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

  // const [editAddressIndex, setEditAddressIndex] = useState(null);

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

  const deleteAddress = async (addressIndex) => {
    try {
      const response = await fetch(`${API_URL}/${userId}`);
      if (!response.ok) {
        console.log("Failed to fetch user data. Status:", response.status);
        return;
      }

      const userData = await response.json();

      const updatedAddressList = addressList.filter((_, index) => index !== addressIndex);

      userData.address = Object.fromEntries(updatedAddressList.map((address, index) => [index + 1, address]));

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
        setAddressList(updatedAddressList);
        showAlert("Address deleted successfully!", "success");
      } else {
        console.log("Failed to update data. Status:", patchResponse.status);
      }
    } catch (error) {
      console.log("Error deleting address:", error);
    }
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
        padding: "100px",
        flexWrap: "wrap",
        // flexBasis: "500px",
        alignItems: "center",
        width: "100%",
      }}
      onSubmit={handleSubmit}
    >
      <Box
        sx={{
          flex: "1 1 300px",
          display: "flex",
          flexDirection: "column",
          width: "50%",
          alignItems: "center",
          gap: "20px",
        }}
      >
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

      <Box
        sx={{
          display: "flex",
          width: "50%",
          flexWrap: "wrap",
          // height: "100vh",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        {addressList.map((addressItem, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              minWidth: "500px",
              alignItems: "center",
              flexShrink: "1",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "30px",
                boxShadow: "0px 1px 60px -30px rgba(0,0,0,1)",
              }}
            >
              <Typography>Address {index + 1}:</Typography>
              <AddressComponent
                deleteAddress={() => deleteAddress(index)} // Pass deleteAddress function with the index
                address={addressItem}
                editAddress={() => editAddress(index)}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProfileAddress;
