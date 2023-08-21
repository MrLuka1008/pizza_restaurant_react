import React, { useEffect, useState } from "react";
import { Box, InputLabel, Alert, Typography } from "@mui/material";
import AddressComponent from "./AddressComponent";
import SubmitBtn from "../../buttons/SubmitBtn";
import SelectCity from "./SelectCity";
import MyTextField from "../profileInfo/MyTextField";

const ProfileAddress = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const API_URL = "http://localhost:3500/registerAccount";
  const [address, setAddress] = useState({ addressname: "", streetaddress: "", city: "", fullAddress: "", phone: "" });
  const userId = localStorage.getItem("user_id");
  const [userAddressLength, setUserAddressLength] = useState(0);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [addressList, setAddressList] = useState([]);

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);

    setAddress((prevAddress) => ({
      ...prevAddress,
      city: country,
    }));
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

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        padding: "100px",
        flexWrap: "wrap",
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
        <Box>
          <InputLabel htmlFor="Address name">Save name</InputLabel>
          <MyTextField value={address.addressname} handleInputChange={handleInputChange} name={"addressname"} />
          <Typography sx={{ fontSize: "12px", color: "gray", marginTop: "1px" }}>Example: My Home, Office</Typography>
        </Box>

        <Box>
          <InputLabel htmlFor="Streetaddress">Street address</InputLabel>
          <MyTextField value={address.streetaddress} handleInputChange={handleInputChange} name={"streetaddress"} />
          <Typography sx={{ fontSize: "12px", color: "gray", marginTop: "1px" }}>Example: 123 Main Street</Typography>
        </Box>

        <Box>
          <InputLabel htmlFor="address">Apt, suite, etc</InputLabel>
          <MyTextField value={address.fullAddress} handleInputChange={handleInputChange} name={"fullAddress"} />
          <Typography sx={{ fontSize: "12px", color: "gray", marginTop: "1px" }}>
            Example: Apt 123, Suite B, 3rd Floor
          </Typography>
        </Box>

        <Box>
          <InputLabel htmlFor="Phone">Phone</InputLabel>
          <MyTextField value={address.phone} handleInputChange={handleInputChange} name={"phone"} />
          <Typography sx={{ fontSize: "12px", color: "gray", marginTop: "1px" }}>Example: 123-456-7890</Typography>
        </Box>

        <SelectCity selectedCountry={selectedCountry} handleCountryChange={handleCountryChange} />
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
