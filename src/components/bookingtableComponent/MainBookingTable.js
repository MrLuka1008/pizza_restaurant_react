import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import BookingTableImg from "../../assets/images/bookingTable.png";
import SubmitBtn from "../buttons/SubmitBtn";
import TableChoose from "./TableChoose";
import TimeChoose from "./TimeChoose";
import DayChoose from "./DayChoose";
import apiRequest from "../../api/apiRequest";
import { Link } from "react-router-dom";

const options = [
  { value: 25, label: "Choose Time" },
  { value: 0, label: "I will call" },
  { value: 9, label: "09:00" },
  { value: 10, label: "10:00" },
  { value: 11, label: "11:00" },
  { value: 12, label: "12:00" },
  { value: 13, label: "13:00" },
  { value: 14, label: "14:00" },
  { value: 15, label: "15:00" },
  { value: 16, label: "16:00" },
  { value: 17, label: "17:00" },
  { value: 18, label: "18:00" },
  { value: 19, label: "19:00" },
  { value: 20, label: "20:00" },
  { value: 21, label: "21:00" },
  { value: 22, label: "22:00" },
  { value: 23, label: "23:00" },
  { value: 24, label: "24:00" },
];

const MainBookingTable = () => {
  const API_URL = "http://localhost:3500/bookingtable";
  const userId = localStorage.getItem("user_id");
  const [allInfoBookingTable, setAllInfoBookingTable] = useState({
    CalendarDate: [],
    TableValue: "",
    TimeValue: options[0],
    id: "",
  });

  const [bookingInfo, setBookingInfo] = useState(null);
  const [showBookin, SetShowBookin] = useState(true);
  const [editInd, SetEditInd] = useState(true);

  // const navigate = useNavigate();

  const handleDateChange = (newDate) => {
    const newDay = newDate.$D;
    const newMonth = newDate.$M + 1;
    const newYear = newDate.$y;

    setAllInfoBookingTable((prevInfo) => ({
      ...prevInfo,
      CalendarDate: [newDay, newMonth, newYear],
      id: userId,
    }));
  };

  const handleTableChange = (event) => {
    const value = event.target.value;
    setAllInfoBookingTable((prevInfo) => ({
      ...prevInfo,
      TableValue: value,
    }));
  };

  const handleTimeChange = (event) => {
    const value = event.target.value;
    const selectedOption = options.find((option) => option.value === value);

    setAllInfoBookingTable((prevInfo) => ({
      ...prevInfo,
      TimeValue: selectedOption,
    }));
  };

  const handleSubmit = async (event) => {
    // event.preventDefault();

    const patchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allInfoBookingTable),
    };

    apiRequest(API_URL, patchOptions);
  };

  const edit = () => {
    // Update the booking info state with fetched data
    SetEditInd(false);
    SetShowBookin(true);
    const selectedOption = options.find((option) => option.value === bookingInfo.TimeValue.value);
    setAllInfoBookingTable((prevInfo) => ({
      ...prevInfo,
      CalendarDate: bookingInfo.CalendarDate,
      TableValue: bookingInfo.TableValue,
      TimeValue: selectedOption,
    }));
  };

  const saveUpgradeBookingInfo = async () => {
    try {
      const response = await fetch(`http://localhost:3500/bookingtable/${userId}`);
      const data = await response.json();

      // Update the booking info state with fetched data
      setAllInfoBookingTable({
        CalendarDate: data.CalendarDate,
        TableValue: data.TableValue,
        TimeValue: data.TimeValue.value,
      });

      // Send the updated data to the server
      const patchOptions = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(allInfoBookingTable),
      };

      const patchResponse = await fetch(`http://localhost:3500/bookingtable/${userId}`, patchOptions);
      const patchData = await patchResponse.json();
      window.location.reload();

      console.log("Updated data:", patchData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteBooking = async () => {
    try {
      // Send a DELETE request to delete the booking
      const deleteResponse = await fetch(`http://localhost:3500/bookingtable/${userId}`, {
        method: "DELETE",
      });

      // Check if the deletion was successful
      if (deleteResponse.ok) {
        SetShowBookin(true);
        // Perform any necessary UI updates or navigate to a different page
      } else {
        console.error("Failed to delete booking");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // end test
  useEffect(() => {
    const CheckedBooking = async () => {
      try {
        const response = await fetch(`http://localhost:3500/bookingtable/${userId}`);

        if (response.status === 404) {
          console.log("API endpoint not found.");
          return; // Exit the function if 404
        }

        const info = await response.json();
        SetShowBookin(false);
        setBookingInfo(info);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    CheckedBooking();
  }, [userId]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        margin: "auto",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "10px",
        padding: "100px",
        background: "rgba(255, 255, 255, 0.6)",
        borderRadius: " 16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <Typography sx={{ fontSize: "24px", textAlign: "center" }}>SELECT DATE AND TIME FOR YOUR RESERVATION</Typography>

      {showBookin ? (
        <form
          onSubmit={handleSubmit}
          style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}
        >
          <DayChoose handleDateChange={handleDateChange} />

          <Box
            sx={{
              display: "flex",
              width: "50%",
              flexDirection: "column",
              gap: "30px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TableChoose allInfoBookingTable={allInfoBookingTable} handleTableChange={handleTableChange} />

            <TimeChoose
              allInfoBookingTable={allInfoBookingTable}
              handleTimeChange={handleTimeChange}
              options={options}
            />

            {editInd ? (
              <SubmitBtn text={"Save and Continue"} />
            ) : (
              <Button onClick={saveUpgradeBookingInfo}>Save</Button>
            )}
          </Box>
        </form>
      ) : (
        <Box>
          <Typography>Date: {bookingInfo.CalendarDate.join("/")}</Typography>
          <Typography>Table Value: {bookingInfo.TableValue}</Typography>
          <Typography> Value: {bookingInfo.TimeValue.label}</Typography>
          <Typography>ID: {bookingInfo.id}</Typography>
          <Button onClick={edit}>Edit</Button>
          <Button onClick={deleteBooking}>Delete</Button>
          <Link to={"/checkout"}>Continue Checkout</Link>
        </Box>
      )}

      <Box sx={{ width: "100%", maxWidth: "900px" }}>
        <img src={BookingTableImg} alt="Tableimg" style={{ width: "100%", height: "auto" }} />
      </Box>
    </Box>
  );
};

export default MainBookingTable;
